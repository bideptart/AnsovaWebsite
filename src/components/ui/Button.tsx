import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-(--radius-pill) font-(family-name:--font-display) font-semibold transition-all duration-200 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-gold-deep) disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary:
    "text-(--color-heading) bg-gradient-to-br from-(--color-gold) to-(--color-gold-deep) shadow-[0_6px_16px_rgba(245,166,35,0.25)] hover:shadow-[0_8px_20px_rgba(245,166,35,0.35)] hover:-translate-y-0.5 active:translate-y-0",
  secondary:
    "text-(--color-heading) bg-(--color-page) border border-(--color-heading)/15 hover:border-(--color-heading)/35 hover:bg-(--color-surface-muted)",
  ghost:
    "text-(--color-heading) bg-transparent hover:bg-(--color-surface-muted)",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-6 text-[14.5px]",
  lg: "h-[52px] px-7 text-[15px]",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

interface ButtonAsButton
  extends CommonProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  href?: undefined;
}

interface ButtonAsLink extends CommonProps {
  href: string;
  target?: string;
  rel?: string;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", className = "", children } = props;
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} target={props.target} rel={props.rel} className={classes}>
        {children}
      </Link>
    );
  }

  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  void _href;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
