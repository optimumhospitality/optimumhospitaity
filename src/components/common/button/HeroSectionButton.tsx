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
  const buttonClasses ="h-[44px] whitespace-nowrap px-6 lg:px-8 gap-2 lg:h-[56px] font-normal rounded-md lg:rounded-lg inline-flex items-center justify-center bg-primary text-white text-[14px] lg:text-[20px] uppercase hover:bg-primary/90 transition-all duration-300 group "
  const iconElement = (
    <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
