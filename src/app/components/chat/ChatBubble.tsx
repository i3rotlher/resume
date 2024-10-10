"use client";
import { useState, useEffect } from "react";

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
  const [currentMessageIndex, setCurrentMessageIndex] = useState<number>(0);
  const [missedMessagesCount, setMissedMessagesCount] = useState<number>(0);
  const [lastViewedMessageIndex, setLastViewedMessageIndex] = useState(-1);

  // Nachrichten hinzufügen, unabhängig davon, ob der Chat geöffnet ist oder nicht
  useEffect(() => {
    const timer = setInterval(() => {
      if (currentMessageIndex < predefinedMessages.length) {
        const newMessage = predefinedMessages[currentMessageIndex];
        setMessages((prev) => [...prev, newMessage]);

        // Erhöhe den Zähler für ungelesene Nachrichten, wenn der Chat geschlossen ist
        if (!isChatOpen) {
          setMissedMessagesCount((prev) => prev + 1);
        }
        setCurrentMessageIndex((prev) => prev + 1);
      } else {
        clearInterval(timer); // Stoppe den Timer, wenn alle Nachrichten angezeigt wurden
      }
    }, 3000); // Nachrichten erscheinen alle 3 Sekunden

    return () => {
      clearInterval(timer); // Timer aufräumen
    };
  }, [currentMessageIndex, isChatOpen]);

  const toggleChat = () => {
    setIsChatOpen((prev) => !prev);
    if (!isChatOpen) {
      setMissedMessagesCount(0); // Zähler zurücksetzen, wenn der Chat geöffnet wird
    } else {
      setLastViewedMessageIndex(currentMessageIndex - 1);
    }
  };

  console.log(lastViewedMessageIndex);
  console.log(currentMessageIndex);
  console.log(missedMessagesCount);

  return (
    <div style={{ zIndex: 100, position: "relative" }}>
      <div
        onClick={toggleChat}
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
        {missedMessagesCount > 0 && (
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
          <button onClick={toggleChat} style={{ marginBottom: "10px" }}>
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
                    {currentMessageIndex - lastViewedMessageIndex - 1} Unread
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
