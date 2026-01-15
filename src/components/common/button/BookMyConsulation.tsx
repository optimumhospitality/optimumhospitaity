import { ArrowUpRight } from "lucide-react";

interface BookMyConsultationProps {
  readonly text?: string;
  readonly onClick?: () => void;
}

export default function BookMyConsultation({
  text = "BOOK MY CONSULTATION",
  onClick,
}: BookMyConsultationProps) {
  return (
    <button
      onClick={onClick}
      className="h-[44px] sm:h-[52px] lg:h-[56px] inline-flex items-center justify-center gap-[8px] py-[12px] sm:py-[14px] lg:py-[16px] px-[20px] sm:px-[28px] lg:px-[36px] bg-primary text-white text-[16px] sm:text-[16px] lg:text-[16px] font-normal tracking-[0.1em] rounded-[8px] hover:bg-primary/90 transition-colors"
    >
      {text}
      <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4" />
    </button>
  );
}
