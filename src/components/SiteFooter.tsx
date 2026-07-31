import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { navigation, contact } from "@/lib/site";
import { landingNavGroups } from "@/data/landingPages";
import { FooterLandingLinks } from "@/components/FooterLandingLinks";
import logoImg from "../../public/images/logo.png";

// SERVER COMPONENT — it must stay one.
//
// This renders in the root layout, so it is on every page. It imports the
// landing-page registry to build its link columns; that is safe only because
// nothing here runs on the client. Adding "use client" to this file would ship
// every landing-page record — all long-form copy, every FAQ — into the JS
// bundle of every page on the site.

export function SiteFooter() {
  const groups = landingNavGroups();

  return (
    <footer className="site-footer">
      {/* Two-part top row: identity and contact on the left, link columns
          spread across the right. Previously everything was packed left and the
          right ~40% of a 74rem footer sat empty. */}
      <div className="footer-top">
        <div className="footer-identity">
          <Link href="/" className="footer-logo-link">
            <Image
              src={logoImg}
              alt="Honey Bloom Beauty"
              style={{ height: "48px", width: "auto", display: "block" }}
            />
          </Link>
          <p className="footer-tagline">
            Professional beauty care, brow artistry, skincare, lash services, waxing, threading,
            tinting, and henna.
          </p>
          <address className="footer-contact">
            <a href={contact.phoneHref}>
              <Phone aria-hidden="true" size={14} />
              {contact.phone}
            </a>
            <a href={`mailto:${contact.email}`}>
              <Mail aria-hidden="true" size={14} />
              {contact.email}
            </a>
            <span>
              <MapPin aria-hidden="true" size={14} />
              {contact.address}
            </span>
          </address>
        </div>

        {/* Resolved on the server; only label/href pairs cross into the client
            component, never the registry itself. */}
        {groups.length > 0 && <FooterLandingLinks groups={groups} />}
      </div>

      <nav aria-label="Footer navigation">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
        <Link href="/blog">Blog</Link>
      </nav>
    </footer>
  );
}
