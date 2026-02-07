import { useState } from "react";

export default function Chatbot() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Toggle Button - Always visible */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
          transition: "transform 0.3s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
        }}
        aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
      >
        {isExpanded ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chatbot iframe - Always rendered, toggled via styles */}
      <iframe
        src="https://optimumchatbot.netlify.app/?embedded=true"
        style={{
          position: "fixed",
          bottom: isExpanded ? "90px" : "20px",
          right: "20px",
          width: isExpanded ? "420px" : "60px",
          height: isExpanded ? "620px" : "60px",
          border: "none",
          zIndex: 9999,
          background: "transparent",
          borderRadius: isExpanded ? "12px" : "50%",
          boxShadow: isExpanded ? "0 8px 24px rgba(0, 0, 0, 0.2)" : "none",
          pointerEvents: isExpanded ? "auto" : "none",
          opacity: isExpanded ? 1 : 0,
          transition: "all 0.3s ease",
          overflow: "hidden",
        }}
        allow="clipboard-write"
        title="Chat Support"
      />
    </>
  );
}
