"use client";

import { useEffect, useMemo, useRef, type ReactNode, type RefObject } from "react";
import styles from "./ScrollFloat.module.css";

type ScrollFloatProps = {
  children: ReactNode;
  scrollContainerRef?: RefObject<HTMLElement | null>;
  containerClassName?: string;
  textClassName?: string;
  animationDuration?: number;
  ease?: string;
  scrollStart?: string;
  scrollEnd?: string;
  stagger?: number;
};

function joinClasses(...classes: Array<string | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function ScrollFloat({
  children,
  scrollContainerRef,
  containerClassName = "",
  textClassName = "",
  animationDuration = 1,
  ease = "back.inOut(2)",
  scrollStart = "center bottom+=50%",
  scrollEnd = "bottom bottom-=40%",
  stagger = 0.03,
}: ScrollFloatProps) {
  const containerRef = useRef<HTMLHeadingElement | null>(null);
  const text = typeof children === "string" ? children.trim() : "";

  const splitText = useMemo(() => {
    if (!text) {
      return children;
    }

    const words = text.split(" ");
    let charIndex = 0;

    const elements: ReactNode[] = [];
    words.forEach((word, wordIdx) => {
      const chars = word.split("").map((char) => {
        const key = `${char}-${charIndex++}`;
        return (
          <span aria-hidden="true" className={styles.char} key={key}>
            {char}
          </span>
        );
      });

      elements.push(
        <span key={`word-${wordIdx}`} style={{ display: "inline-block", whiteSpace: "nowrap" }}>
          {chars}
        </span>
      );

      if (wordIdx < words.length - 1) {
        elements.push(<span key={`space-${wordIdx}`}>{" "}</span>);
      }
    });

    return elements;
  }, [children, text]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el || !text) return;

    let mounted = true;
    let context: { revert: () => void } | undefined;

    async function animate() {
      const [{ gsap }, { ScrollTrigger }] = await Promise.all([import("gsap"), import("gsap/ScrollTrigger")]);

      if (!mounted || !el) return;

      gsap.registerPlugin(ScrollTrigger);

      const charElements = el.querySelectorAll<HTMLElement>(`.${styles.char}`);
      if (!charElements.length) return;

      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        gsap.set(charElements, {
          opacity: 1,
          yPercent: 0,
          scaleY: 1,
          scaleX: 1,
        });
        return;
      }

      const scroller = scrollContainerRef?.current ?? window;

      context = gsap.context(() => {
        gsap.fromTo(
          charElements,
          {
            willChange: "opacity, transform",
            opacity: 0,
            yPercent: 120,
            scaleY: 2.3,
            scaleX: 0.7,
            transformOrigin: "50% 0%",
          },
          {
            duration: animationDuration,
            ease,
            opacity: 1,
            yPercent: 0,
            scaleY: 1,
            scaleX: 1,
            stagger,
            scrollTrigger: {
              trigger: el,
              scroller,
              start: scrollStart,
              end: scrollEnd,
              scrub: true,
            },
          },
        );
      }, el);
    }

    animate();

    return () => {
      mounted = false;
      context?.revert();
    };
  }, [animationDuration, ease, scrollContainerRef, scrollEnd, scrollStart, stagger, text]);

  return (
    <h2
      aria-label={text || undefined}
      className={joinClasses(styles.scrollFloat, containerClassName)}
      ref={containerRef}
    >
      <span className={joinClasses(styles.scrollFloatText, textClassName)}>{splitText}</span>
    </h2>
  );
}

export default ScrollFloat;
