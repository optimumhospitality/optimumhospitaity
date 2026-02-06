export default function Chatbot() {
  return (
    <iframe
      src="https://optimumchatbot.netlify.app/?embedded=true"
      style={{
        position: "fixed",
        bottom: 0,
        right: 0,
        width: "420px",
        height: "620px",
        border: "none",
        zIndex: 9999,
        background: "transparent",
      }}
      allow="clipboard-write"
      title="Chat Support"
    />
  );
}
