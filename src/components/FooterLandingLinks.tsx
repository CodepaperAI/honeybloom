"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Client component ONLY so it can read the current pathname and avoid rendering
// a link from a page to itself.
//
// It receives plain {label, href} data as props and MUST NOT import the landing
// page registry. The footer renders in the root layout, so a registry import
// here would push every page's long-form copy and FAQs into the JS bundle of
// every page on the site.

export interface FooterNavGroup {
  title: string;
  links: Array<{ label: string; href: string }>;
}

export function FooterLandingLinks({ groups }: { groups: FooterNavGroup[] }) {
  const pathname = usePathname();

  return (
    <div className="footer-columns">
      {groups.map((group) => (
        <div
          // A long list splits into two sub-columns rather than running as one
          // tall stack beside a short one. CSS cannot branch on item count, so
          // the decision is made here.
          className={group.links.length > 6 ? "footer-column footer-column-split" : "footer-column"}
          key={group.title}
        >
          <h2 className="footer-column-title">{group.title}</h2>
          <ul>
            {group.links.map((link) => {
              const isCurrent = pathname === link.href;
              return (
                <li key={link.href}>
                  {isCurrent ? (
                    // The page you are already on is shown as plain text.
                    // Self-links are dead weight in the link graph and read as
                    // a mistake to anyone who clicks one.
                    <span className="footer-column-current" aria-current="page">
                      {link.label}
                    </span>
                  ) : (
                    <Link href={link.href}>{link.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </div>
  );
}
