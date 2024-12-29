import React, { useState } from "react"; 
import "./Footer.css"; 
import footer_logo from "../Assets/logo_big.png"; 
import instagram_icon from "../Assets/instagram_icon.png"; 
import pintester_icon from "../Assets/pintester_icon.png"; 
import whatsapp_icon from "../Assets/whatsapp_icon.png"; 
import chatbot_icon from "../Assets/chatbot_icon.png";  // Add chatbot icon

const Footer = () => {
  const [chatVisible, setChatVisible] = useState(false);

  const toggleChat = () => {
    setChatVisible(!chatVisible);
  };

  return (
    <div className="footer">
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>H Patterns</p>
      </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
        <div className="footer-icons-container">
          <img src={instagram_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={pintester_icon} alt="" />
        </div>
        <div className="footer-icons-container">
          <img src={whatsapp_icon} alt="" />
        </div>
      </div>
      
      {/* AI Chatbot Icon */}
      <div className="chatbot-icon" onClick={toggleChat}>
        <img src={chatbot_icon} alt="Chat with us" />
      </div>

      {/* Chat Window */}
      {chatVisible && (
        <div className="chat-window">
          <div className="chat-header">
            <h4>AI Chatbot</h4>
            <button onClick={toggleChat}>X</button>
          </div>
          <div className="chat-body">
            <p>Hi! How can I assist you today?</p>
            {/* You can integrate an AI-powered response here */}
          </div>
          <div className="chat-input">
            <input type="text" placeholder="Type a message..." />
            <button>Send</button>
          </div>
        </div>
      )}

      <div className="footer-copyright">
        <hr />
        <p>Copyright @ 2024 - All Right Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
