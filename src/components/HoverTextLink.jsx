import Link from "next/link";

export default function HoverTextLink({
  href,
  defaultText,
  hoverText,
}) {
  return (
    <Link
      href={href}
      className="group relative inline-flex h-5 overflow-hidden bg-transparent"
    >
      {/* Default Text */}
      <span className="flex items-center transition-transform duration-300 group-hover:-translate-y-full">
        {defaultText}
      </span>

      {/* Hover Text */}
      <span className="absolute inset-0 flex translate-y-full items-center transition-transform duration-300 group-hover:translate-y-0">
        {hoverText}
      </span>
    </Link>
  );
}