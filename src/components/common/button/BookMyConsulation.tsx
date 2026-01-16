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
      className="h-[44px] whitespace-nowrap px-6 lg:px-8 gap-2 lg:h-[56px] font-normal rounded-md lg:rounded-lg inline-flex items-center justify-center bg-primary text-white text-[14px] lg:text-[20px] hover:bg-primary/90 transition-colors"
    >
      {text}
      <ArrowUpRight className="w-3.5 h-3.5 sm:w-5 sm:h-5" />
    </button>
  );
}
