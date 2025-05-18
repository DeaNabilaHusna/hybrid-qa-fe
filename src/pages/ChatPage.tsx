import { useState, useRef, useEffect } from "react";
import styles from "../styles/pages/chat.module.scss";
import Header from "../components/Header";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>(
    []
  );
  const [input, setInput] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    const botReply = {
      sender: "bot",
      text: "Ini adalah respon otomatis dari Ask.UNAIR. Pertanyaan Anda akan segera dijawab.",
    };

    setMessages((prev) => [...prev, userMessage, botReply]);
    setInput("");

    inputRef.current?.focus();
  };

  return (
    <div className={styles.chatContainer}>
      <Header />
      <div className={styles.chatContent}>
        {messages.length === 0 && (
          <h2 className={styles.title}>Apa yang bisa saya bantu hari ini?</h2>
        )}
        {messages.length > 0 && (
          <div className={styles.messages}>
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`${styles.message} ${
                  msg.sender === "user" ? styles.user : styles.bot
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
        )}
        <div className={styles.chatBox}>
          <div className={styles.inputBox}>
            <input
              type="text"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSend();
                }
              }}
              placeholder="Tanyakan sesuatu..."
            />
            <button className={styles.button} onClick={handleSend}>
              Kirim
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
