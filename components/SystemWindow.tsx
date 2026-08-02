import { ReactNode } from "react";

export default function SystemWindow({
  label,
  children,
  className = "",
}: {
  label?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <div className={`system-window rounded-sm px-6 py-7 sm:px-8 sm:py-9 ${className}`}>
      <span className="corner-tick left-0 top-0 border-l border-t" />
      <span className="corner-tick right-0 top-0 border-r border-t" />
      <span className="corner-tick left-0 bottom-0 border-l border-b" />
      <span className="corner-tick right-0 bottom-0 border-r border-b" />
      {label && (
        <div className="tag mb-4 text-xs text-violet-bright">{label}</div>
      )}
      {children}
    </div>
  );
}