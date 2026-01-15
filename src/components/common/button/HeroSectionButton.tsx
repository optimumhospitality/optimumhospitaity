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
    "inline-flex items-center justify-center gap-1.5 min-[500px]:gap-1.5 sm:gap-2 min-[750px]:gap-2.5 md:gap-3 px-4 min-[500px]:px-3 sm:px-4 min-[750px]:px-5 md:px-6 lg:px-8 h-[40px] min-[500px]:h-[32px] sm:h-[36px] min-[750px]:h-[40px] md:h-[44px] lg:h-auto lg:py-3.5 bg-primary text-white font-normal text-[14px] min-[500px]:text-[10px] sm:text-[12px] min-[750px]:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] rounded-md hover:bg-primary/90 transition-all duration-300 group whitespace-nowrap";

  const iconElement = (
    <ArrowUpRight className="w-3.5 h-3.5 min-[500px]:w-2.5 min-[500px]:h-2.5 sm:w-3 sm:h-3 min-[750px]:w-3.5 min-[750px]:h-3.5 md:w-4 md:h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
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
