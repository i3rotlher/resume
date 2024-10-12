"use client";
import React from "react";
import { useState } from "react";
import Chat from "./Chat";

import styles from "../../styles/chat/ChatBubble.module.css";

const ChatBubble = () => {
  const [showChat, setShowChat] = useState(false);

  const messages = [
    { message: "Hello there! How's it going?", time: "09:15" },
    { message: "Today is a great day to learn something new!", time: "10:30" },
    { message: "Remember to take breaks and stay hydrated. 😊", time: "11:45" },
    { message: "You're doing an amazing job, keep it up!", time: "12:00" },
    { message: "Isn't it a good time for a quick stretch?", time: "13:20" },
    {
      message: "Success is the sum of small efforts, repeated daily.",
      time: "14:35",
    },
    { message: "Every day is a new opportunity to grow!", time: "15:50" },
  ];

  return (
    <div className={styles.chatBubbleContainer}>
      <div className={`${styles.chat} ${showChat ? styles.show : ""}`}>
        {showChat && <Chat messages={messages} firstNewMessageIdx={5} />}
      </div>
      <button
        onClick={() => setShowChat(!showChat)}
        className={styles.chatBubbleButton}
      >
        💬
      </button>
    </div>
  );
};

export default ChatBubble;
