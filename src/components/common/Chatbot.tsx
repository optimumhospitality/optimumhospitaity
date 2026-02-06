import { useState } from "react";
import { MessageCircle, X } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-4">
      {/* Chat Window */}
      <div
        className={`transition-all duration-300 ease-in-out origin-bottom-right overflow-hidden shadow-2xl rounded-2xl bg-white
          ${isOpen ? "w-[420px] h-[620px] opacity-100 scale-100" : "w-0 h-0 opacity-0 scale-90 pointer-events-none"}
        `}
        style={{
          // Fallback for max-width on smaller screens
          maxWidth: "calc(100vw - 48px)",
          maxHeight: "calc(100vh - 120px)",
        }}
      >
        <iframe
          src="https://optimumchatbot.netlify.app/?embedded=true"
          className="w-full h-full border-0"
          title="Chat Support"
          allow="clipboard-write"
        />
      </div>

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative flex h-14 w-14 items-center justify-center rounded-full bg-[#23283C] text-white shadow-lg transition-all hover:bg-[#23283C]/90 focus:outline-none focus:ring-2 focus:ring-[#23283C] focus:ring-offset-2"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        <div className="relative h-6 w-6">
          {/* Morphing icon effect or simple switch */}
          <MessageCircle
            className={`absolute inset-0 h-full w-full transition-all duration-300 ${isOpen ? "rotate-90 opacity-0" : "rotate-0 opacity-100"}`}
          />
          <X
            className={`absolute inset-0 h-full w-full transition-all duration-300 ${isOpen ? "rotate-0 opacity-100" : "-rotate-90 opacity-0"}`}
          />
        </div>

        {/* Pulse effect if closed */}
        {!isOpen && (
          <span className="absolute -right-1 -top-1 px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-[#F7EFE3] text-[#23283C] shadow-sm animate-bounce">
            1
          </span>
        )}
      </button>
    </div>
  );
}
