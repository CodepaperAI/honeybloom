"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, Phone } from "lucide-react";
import { contact, navigation } from "@/lib/site";
import logoImg from "../../public/images/logo.png";

const LogoFlowerIcon = () => (
  <svg
    className="brand-flower-icon"
    viewBox="0 0 24 24"
    width="18"
    height="18"
    fill="currentColor"
    aria-hidden="true"
    style={{ color: "var(--color-plum)", marginRight: "6px", display: "inline-block", verticalAlign: "middle" }}
  >
    <path d="M12 2a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5S9.5 5.88 9.5 4.5 10.62 2 12 2zm0 13a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zm6.5-6.5a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5 1.12-2.5 2.5-2.5zM5.5 8.5a2.5 2.5 0 0 1 2.5 2.5c0 1.38-1.12 2.5-2.5 2.5S3 12.38 3 11s1.12-2.5 2.5-2.5zM12 9.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);

export function SiteHeader() {
  const detailsRef = useRef<HTMLDetailsElement>(null);

  const closeMenu = () => {
    if (detailsRef.current) {
      detailsRef.current.removeAttribute("open");
    }
  };

  return (
    <header className="site-header theme-header" aria-label="Honey Bloom Beauty site header">
      <Link className="brand theme-brand" href="/" aria-label="Honey Bloom Beauty home">
        <Image
          src={logoImg}
          alt="Honey Bloom Beauty"
          style={{ height: "58px", width: "auto", display: "block" }}
          priority
        />
      </Link>
      <nav className="nav-links theme-nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href} style={{ textTransform: "uppercase", letterSpacing: "0.12em" }}>
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="header-actions theme-header-actions">
        <details ref={detailsRef} className="mobile-menu theme-mobile-menu">
          <summary aria-label="Open site navigation">
            <Menu aria-hidden="true" size={19} />
            <span>Menu</span>
          </summary>
          <nav aria-label="Mobile navigation">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} onClick={closeMenu}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
        <a className="header-call theme-header-call" href={contact.phoneHref} aria-label={`Call Honey Bloom Beauty at ${contact.phone}`}>
          <Phone aria-hidden="true" size={14} />
          <span>{contact.phone}</span>
        </a>
      </div>
    </header>
  );
}
