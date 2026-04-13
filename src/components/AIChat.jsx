import React, { useRef, useEffect } from 'react';
import { suggestedQuestions } from '../data/data';

const AIChat = ({ isChatOpen, setIsChatOpen, chatMessages, chatInput, setChatInput, 
                  isTyping, handleChatSubmit, chatEndRef }) => {
  return (
    <>
      <button className={`ai-chat-button ${isChatOpen ? 'open' : ''}`} onClick={() => setIsChatOpen(!isChatOpen)}>
        <span className="chat-icon">AI</span>
        <span className="chat-text">Assistant</span>
        <span className="chat-pulse"></span>
      </button>
      
      {isChatOpen && (
        <div className="ai-chat-window">
          <div className="chat-header">
            <div className="chat-header-info">
              <span className="chat-avatar">AI</span>
              <div>
                <h4>Muhammad Ali's AI</h4>
                <p>Trained on all his data</p>
              </div>
            </div>
            <button className="chat-close" onClick={() => setIsChatOpen(false)}>×</button>
          </div>
          
          <div className="chat-messages">
            {chatMessages.map((msg) => (
              <div key={msg.id} className={`chat-message ${msg.type}`}>
                <div className="message-bubble">
                  <span className="message-icon">{msg.type === 'bot' ? 'AI' : 'You'}</span>
                  <div className="message-text">{msg.message}</div>
                </div>
                <div className="message-time">
                  {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="chat-message bot">
                <div className="message-bubble typing">
                  <span className="message-icon">AI</span>
                  <div className="typing-indicator"><span></span><span></span><span></span></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>
          
          <form className="chat-input-form" onSubmit={handleChatSubmit}>
            <input type="text" className="chat-input" placeholder="Ask me anything about Muhammad Ali..." 
                   value={chatInput} onChange={(e) => setChatInput(e.target.value)} />
            <button type="submit" className="chat-send-btn">Send</button>
          </form>
          
          <div className="chat-suggestions">
            {suggestedQuestions.map((q, i) => (
              <button key={i} onClick={() => setChatInput(q)}>{q}</button>
            ))}
          </div>
          
          <div className="chat-footer">
            <span>AI knows everything about Muhammad Ali's work</span>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;