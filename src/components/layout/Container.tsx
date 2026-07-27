import { ReactNode } from "react";

export default function Container({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <div id={id} className={`container-ansova ${className}`}>
      {children}
    </div>
  );
}
