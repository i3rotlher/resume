import React from "react";

import styles from "../../styles/chat/Chat.module.css";

type Message = {
  message: string;
  time: string;
};

type ChatProps = {
  messages: Message[];
  firstNewMessageIdx: number;
};

const Chat: React.FC<ChatProps> = ({ messages, firstNewMessageIdx }) => {
  return (
    <div className={styles.chatContainer}>
      {messages.map((m, idx) => (
        <React.Fragment key={idx}>
          {firstNewMessageIdx == idx && (
            <h3 className={styles.newMessages}>
              {messages.length - firstNewMessageIdx} New Messages
            </h3>
          )}
          <div className={styles.chatMessageContainer}>
            <h3
              style={{ fontWeight: idx >= firstNewMessageIdx ? "bold" : "" }}
              className={styles.chatMessage}
            >
              {m.message}
            </h3>
            <div className={styles.chatMessageTime}>{m.time}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Chat;
