"use client";
import { useState, useEffect, useRef } from "react";

const predefinedMessages: string[] = [
  "Hallo! Wie kann ich Ihnen helfen?",
  "Haben Sie Fragen zu unseren Produkten?",
  "Wir bieten auch Sonderangebote an!",
  "Wie fanden Sie unseren Service?",
  "Vielen Dank für Ihr Feedback!",
];

const ChatBubble: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [nextMessageIndex, setNextMessageIndex] = useState<number>(0);
  const [missedMessagesCount, setMissedMessagesCount] = useState<number>(0);
  const [lastViewedMessageIndex, setLastViewedMessageIndex] = useState(-1);

  const chatContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      if (nextMessageIndex < predefinedMessages.length) {
        const newMessage = predefinedMessages[nextMessageIndex];
        setMessages((prev) => [...prev, newMessage]);
        setNextMessageIndex((prev) => prev + 1);

        if (!isChatOpen) {
          setMissedMessagesCount((prev) => prev + 1);
        }
      } else {
        clearInterval(timer);
      }
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [nextMessageIndex, isChatOpen]);

  // Close chat if click is outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        chatContainerRef.current &&
        !chatContainerRef.current.contains(event.target as Node)
      ) {
        closeChat(); // Close chat when clicked outside
      }
    };

    if (isChatOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isChatOpen]);

  const closeChat = () => {
    setLastViewedMessageIndex(nextMessageIndex);
    setMissedMessagesCount(0);
    setIsChatOpen(false);
  };

  const openChat = () => {
    setIsChatOpen(true);
  };

  return (
    <div style={{ zIndex: 100, position: "relative" }}>
      <div
        onMouseDown={openChat}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          backgroundColor: "blue",
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          cursor: "pointer",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.3)",
        }}
      >
        {missedMessagesCount > 0 && !isChatOpen && (
          <div
            style={{
              position: "absolute",
              top: "-5px",
              right: "-5px",
              backgroundColor: "red",
              borderRadius: "50%",
              width: "20px",
              height: "20px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: "12px",
            }}
          >
            {missedMessagesCount}
          </div>
        )}
        <span style={{ color: "white", fontSize: "24px" }}>💬</span>
      </div>

      {isChatOpen && (
        <div
          ref={chatContainerRef}
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            backgroundColor: "white",
            borderRadius: "8px",
            width: "300px",
            boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
            padding: "10px",
            zIndex: 1000,
          }}
        >
          <button onClick={closeChat} style={{ marginBottom: "10px" }}>
            Minimieren
          </button>
          <div style={{ maxHeight: "200px", overflowY: "auto" }}>
            {messages.map((message, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "10px",
                  fontWeight:
                    index > lastViewedMessageIndex ? "bold" : "normal",
                }}
              >
                {lastViewedMessageIndex === index - 1 && (
                  <div>
                    {nextMessageIndex - lastViewedMessageIndex - 1} Unread
                    Messages
                  </div>
                )}
                {message}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
