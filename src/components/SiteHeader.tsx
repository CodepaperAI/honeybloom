import Link from "next/link";
import { Phone } from "lucide-react";
import { contact, navigation } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Honey Bloom Beauty site header">
      <Link className="brand" href="/" aria-label="Honey Bloom Beauty home">
        <span className="brand-mark" aria-hidden="true">
          HB
        </span>
        <span>
          Honey Bloom
          <small>Beauty</small>
        </span>
      </Link>
      <nav className="nav-links" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>
      <a className="header-call" href={contact.phoneHref} aria-label={`Call Honey Bloom Beauty at ${contact.phone}`}>
        <Phone aria-hidden="true" size={17} />
        <span>{contact.phone}</span>
      </a>
    </header>
  );
}
