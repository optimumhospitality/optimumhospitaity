import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

interface HeroSectionButtonProps {
  readonly text: string;
  readonly href?: string;
  readonly to?: string;
  readonly onClick?: () => void;
}

export default function HeroSectionButton({
  text,
  href,
  to,
  onClick,
}: HeroSectionButtonProps) {
  const buttonClasses =
    "inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white font-normal text-[16px] sm:text-[16px] md:text-[16px] lg:text-[16px] rounded-md hover:bg-primary/90 transition-all duration-300 group";

  const iconElement = (
    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
  );

  // If 'to' prop is provided, use Link (internal navigation)
  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        {text}
        {iconElement}
      </Link>
    );
  }

  // If 'href' prop is provided, use anchor tag (external or hash link)
  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {text}
        {iconElement}
      </a>
    );
  }

  // Otherwise, use button element
  return (
    <button onClick={onClick} className={buttonClasses}>
      {text}
      {iconElement}
    </button>
  );
}
