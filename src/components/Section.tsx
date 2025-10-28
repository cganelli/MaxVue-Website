import React from "react";

export default function Section({
  id,
  children,
  className = "",
}: { id?: string; children: React.ReactNode; className?: string }) {
  return (
    <section
      id={id}
      className={`mx-auto max-w-5xl px-4 py-10 md:py-14 ${className}`}
    >
      {children}
    </section>
  );
}
