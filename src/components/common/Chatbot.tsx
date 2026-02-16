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
          background: "rgb(201, 169, 98)",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 10000,
          boxShadow: "none",
        }}
        aria-label={isExpanded ? "Minimize chat" : "Expand chat"}
      >
        {isExpanded ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="black"
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
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {/* Chatbot iframe - Always rendered, toggled via styles */}
      {/* Chatbot Container - Animates scaling */}
      <div
        style={{
          position: "fixed",
          bottom: "90px",
          right: "20px",
          width: "min(420px, calc(100vw - 40px))",
          height: "min(620px, calc(100vh - 120px))",
          zIndex: 9999,
          transform: isExpanded ? "scale(1)" : "scale(0)",
          transformOrigin: "bottom right",
          transition: "transform 0.3s ease-in-out, opacity 0.3s ease-in-out",
          opacity: isExpanded ? 1 : 0,
          pointerEvents: isExpanded ? "auto" : "none",
        }}
      >
        <iframe
          src="https://optimumchatbot.netlify.app/?embedded=true"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            background: "transparent",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            overflow: "hidden",
          }}
          allow="clipboard-write"
          title="Chat Support"
        />
      </div>
    </>
  );
}
