import Link from "next/link";
import { navigation } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="brand-mark" aria-hidden="true">
          HB
        </span>
        <span>Honey Bloom Beauty</span>
      </div>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <p>Professional beauty care, brow artistry, skincare, lash services, waxing, threading, tinting, and henna.</p>
    </footer>
  );
}
