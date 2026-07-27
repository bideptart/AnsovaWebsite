import Container from "./Container";
import Logo from "./Logo";

const FOOTER_LINKS = {
  Product: [
    { label: "Pricing", href: "/pricing" },
    { label: "FAQ", href: "/pricing#faq" },
  ],
  Company: [{ label: "Contact", href: "/contact" }],
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-(--color-heading) text-white/78">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-[1.3fr_1fr_1fr]">
          <div>
            <Logo inverted />
            <p className="mt-4 max-w-xs text-[14.5px] leading-relaxed text-white/60">
              AI voice agents for real business conversations.
            </p>
          </div>

          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-[13px] font-semibold uppercase tracking-wider text-white/45">
                {heading}
              </h3>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-[14.5px] text-white/70 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-[13px] text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {year} Ansova.ai. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}
