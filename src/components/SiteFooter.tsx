import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/lib/site";
import logoImg from "../../public/images/logo.png";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <Link href="/" style={{ display: "block" }}>
          <Image
            src={logoImg}
            alt="Honey Bloom Beauty"
            style={{ height: "48px", width: "auto", display: "block" }}
          />
        </Link>
      </div>
      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/blog">Blog</Link>
      </nav>
      <p>Professional beauty care, brow artistry, skincare, lash services, waxing, threading, tinting, and henna.</p>
    </footer>
  );
}
