import Link from "next/link";

export default function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 font-(family-name:--font-display) text-[19px] font-semibold ${
        inverted ? "text-white" : "text-(--color-heading)"
      }`}
      aria-label="Ansova.ai home"
    >
      <span
        className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-br from-(--color-gold) to-(--color-gold-deep)"
        aria-hidden="true"
      />
      Ansova
      <span className={inverted ? "text-(--color-gold)" : "text-(--color-gold-deep)"}>
        .ai
      </span>
    </Link>
  );
}
