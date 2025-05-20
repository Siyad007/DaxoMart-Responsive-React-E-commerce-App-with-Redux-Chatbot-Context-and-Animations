import React, { useState, useRef, useEffect } from "react";
import chatbotResponses from "../data/chatbotResponses.jsx";
import "animate.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [messages]);
  useEffect(() => {
    if (open && messages.length === 0) {
      const welcome = {
        sender: "bot",
        text: "Hi there! 👋 How can I assist you today?",
      };
      setMessages([welcome]);
    }
  }, [messages.length, open]);

  const handleSend = () => {
    if (input.trim() === "") return;

    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    const response = chatbotResponses.find((item) =>
      item.keywords.some((keyword) => {
        const regex = new RegExp(`\\b${keyword}\\b`, "i");
        return regex.test(input);
      })
    );

    const botMessage = {
      sender: "bot",
      text: response
        ? response.answer
        : "I'm not sure I understand. Can you try asking about our products, shipping, or returns?",
    };

    setTimeout(() => {
      setMessages((prev) => [...prev, botMessage]);
    }, 600);

    setInput("");
  };

  return (
    <div
      style={{ position: "fixed", bottom: "20px", right: "20px", zIndex: 999 }}
    >
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: "#007bff",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "60px",
            height: "60px",
            cursor: "pointer",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            fontSize: "28px",
          }}
        >
          <img
            src="https://static.vecteezy.com/system/resources/thumbnails/032/501/566/small_2x/female-call-center-agent-with-headset-generative-ai-png.png"
            alt=""
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: "50%",
            }}
          />
        </button>
      )}

      {open && (
        <div
          className="animate__animated animate__fadeInUp"
          style={{
            width: "300px",
            height: "400px",
            background: "#fff",
            borderRadius: "12px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            padding: "10px",
          }}
        >
          <div
            style={{
              background: "#010a44",
              color: "#fff",
              padding: "10px",
              borderRadius: "8px",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "16px",
              marginBottom: "10px",
            }}
          >
            👋 Chat with us DaxoMart!
          </div>

          <div
            style={{
              flexGrow: 1,
              overflowY: "auto",
              padding: "5px",
              display: "flex",
              flexDirection: "column",
              gap: "6px",
            }}
            ref={chatRef}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                  backgroundColor:
                    msg.sender === "user" ? "#d1e7dd" : "#f0f0f0",
                  padding: "8px 12px",
                  borderRadius: "16px",
                  maxWidth: "75%",
                  fontSize: "14px",
                }}
              >
                {msg.text}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", marginTop: "10px" }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              style={{
                flex: 1,
                padding: "8px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                marginRight: "5px",
              }}
              placeholder="Ask me something..."
            />
            <button
              onClick={handleSend}
              style={{
                background: "#010a44",
                color: "#fff",
                border: "none",
                borderRadius: "10px",
                padding: "8px 12px",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>

          <button
            onClick={() => setOpen(false)}
            style={{
              position: "absolute",
              top: "-10px",
              right: "-10px",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "50%",
              width: "25px",
              height: "25px",
              fontSize: "14px",
              cursor: "pointer",
              boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
            }}
          >
            ✖
          </button>
        </div>
      )}
    </div>
  );
};

export default Chatbot;

