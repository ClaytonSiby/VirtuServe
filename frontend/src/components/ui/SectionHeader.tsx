import { ReactNode } from "react";

interface SectionHeaderProps {
  label?: ReactNode;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  align = "center",
}: SectionHeaderProps) {
  const base = align === "center" ? "text-center" : "text-left";
  return (
    <div className={`${base} mb-16`}>
      {label && (
        <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-50 border border-accent-200/50 mb-6">
          {label}
        </div>
      )}
      <div className="">
        {typeof title === "string" ? (
          <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            {title}
          </h2>
        ) : (
          title
        )}
        {subtitle && (
          <p className="text-xl text-primary-700 max-w-2xl mx-auto font-light">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
