"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/portfolio", label: "Work" },
  { href: "/journal", label: "Journal" },
  { href: "/contact", label: "Contact" }
];

export function SiteNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky left-0 top-0 z-50 w-full border-b border-cream/10 bg-black/92 px-5 py-4 text-cream shadow-[0_1px_34px_rgba(0,0,0,0.38)] backdrop-blur-xl md:px-9 md:py-5">
      <div className="grid items-end gap-4 md:grid-cols-[1fr_auto_1fr]">
        <div className="hidden md:block" />
        <Link
          href="/"
          aria-label="Maie Salameh home"
          className="mx-auto block w-fit"
        >
          <Image
            src="/images/brand/maie-salameh-couture-wordmark.png"
            alt="Maie Salameh Couture"
            width={565}
            height={274}
            priority
            className="h-12 w-auto invert md:h-14 lg:h-16"
          />
        </Link>
        <nav
          aria-label="Main navigation"
          className="flex w-full justify-between gap-4 text-[10px] uppercase tracking-editorial text-cream/62 md:w-auto md:justify-end md:gap-7 md:pb-2 md:text-[11px]"
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
