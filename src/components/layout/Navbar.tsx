"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Container from "./Container";
import Logo from "./Logo";
import Button from "@/components/ui/Button";

const NAV_LINKS = [
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/pricing#faq" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-(--color-border) bg-(--color-page)/90 backdrop-blur">
      <Container className="flex h-[72px] items-center justify-between">
        <Logo />

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Primary"
        >
          {NAV_LINKS.map((link) => {
            const isActive =
              link.href === "/pricing" && pathname?.startsWith("/pricing");
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`rounded-(--radius-pill) px-4 py-2 text-[14.5px] font-medium transition-colors duration-150 ${
                  isActive
                    ? "bg-(--color-surface-muted) text-(--color-heading)"
                    : "text-(--color-body) hover:text-(--color-heading) hover:bg-(--color-surface-muted)"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden md:block">
          <Button href="/contact" size="md">
            Get started
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-(--radius-md) text-(--color-heading) md:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </Container>

      {open && (
        <div id="mobile-nav" className="border-t border-(--color-border) md:hidden">
          <Container className="flex flex-col gap-1 py-3">
            {NAV_LINKS.map((link) => {
              const isActive =
                link.href === "/pricing" && pathname?.startsWith("/pricing");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`min-h-[44px] rounded-(--radius-md) px-3 py-3 text-[15px] font-medium ${
                    isActive
                      ? "bg-(--color-surface-muted) text-(--color-heading)"
                      : "text-(--color-body)"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
            <Button href="/contact" size="md" className="mt-2 w-full">
              Get started
            </Button>
          </Container>
        </div>
      )}
    </header>
  );
}
