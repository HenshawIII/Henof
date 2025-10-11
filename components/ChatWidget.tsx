'use client';

import { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: Date;
  isMarkdown?: boolean;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! Welcome to Henof Foods. How can I help you today?',
      sender: 'agent',
      timestamp: new Date(),
      isMarkdown: false
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Show notification after 3 seconds if user hasn't interacted
  useEffect(() => {
    if (!hasInteracted && !isOpen) {
      const timer = setTimeout(() => {
        setShowNotification(true);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [hasInteracted, isOpen]);

  // Auto-hide notification after 5 seconds
  useEffect(() => {
    if (showNotification) {
      const timer = setTimeout(() => {
        setShowNotification(false);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [showNotification]);

  const handleChatOpen = () => {
    setIsOpen(!isOpen);
    setHasInteracted(true);
    setShowNotification(false);
  };

  const handleSendMessage = async () => {
    if (!inputText.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
      isMarkdown: false
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);
    setIsLoading(true);

    try {
      // Make POST request to your webhook endpoint
      const response = await fetch(process.env.NEXT_PUBLIC_BACKEND_URL || '', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userMessage.text,
          timestamp: userMessage.timestamp.toISOString(),
          userId: 'anonymous', // You can add user identification here
          sessionId: Date.now().toString(), // Simple session tracking
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
    //   console.log(data);
      
      // Use the response from your webhook, or fallback to default response
      const agentResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: data.response || data.output || getFallbackResponse(userMessage.text),
        sender: 'agent',
        timestamp: new Date(),
        isMarkdown: true // Assume webhook responses are markdown
      };

      setMessages(prev => [...prev, agentResponse]);
    } catch (error) {
      console.error('Error sending message to webhook:', error);
      
      // Fallback response if webhook fails
      const fallbackResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getFallbackResponse(userMessage.text),
        sender: 'agent',
        timestamp: new Date(),
        isMarkdown: false
      };

      setMessages(prev => [...prev, fallbackResponse]);
    } finally {
      setIsTyping(false);
      setIsLoading(false);
    }
  };

  const getFallbackResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('akara') || lowerMessage.includes('bean')) {
      return "Our akara is made from fresh black-eyed peas and traditional spices. We offer different varieties including classic, spicy, and premium mixes. What would you like to know about our akara products?";
    }
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost')) {
      return "Our akara prices range from ₦180 to ₦250 depending on the variety. We also offer bulk discounts for larger orders. Would you like to place an order?";
    }
    
    if (lowerMessage.includes('delivery') || lowerMessage.includes('shipping')) {
      return "We offer fast delivery within Akara and surrounding areas. Delivery typically takes 30-45 minutes. We also have pickup options available at our main location.";
    }
    
    if (lowerMessage.includes('ingredient') || lowerMessage.includes('recipe')) {
      return "Our products use only the finest ingredients - fresh black-eyed peas, pure palm oil, and our special spice blend. All ingredients are locally sourced and meet the highest quality standards.";
    }
    
    if (lowerMessage.includes('order') || lowerMessage.includes('buy')) {
      return "Great! You can place an order through our website, call us directly, or visit our location. What's your preferred method? I can also help you with special requests or bulk orders.";
    }
    
    return "Thank you for your message! I'm here to help with any questions about our Nigerian indigenous foods, pricing, delivery, or placing orders. What would you like to know more about?";
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  const renderMessageContent = (message: Message) => {
    if (message.isMarkdown) {
      return (
        <div className="prose prose-sm max-w-none">
          <ReactMarkdown
            components={{
              // Customize markdown rendering for chat
              p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
              strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
              em: ({ children }) => <em className="italic">{children}</em>,
              ul: ({ children }) => <ul className="list-disc list-inside mb-2 space-y-1">{children}</ul>,
              ol: ({ children }) => <ol className="list-decimal list-inside mb-2 space-y-1">{children}</ol>,
              li: ({ children }) => <li className="text-sm">{children}</li>,
              code: ({ children }) => (
                <code className="bg-gray-100 px-1 py-0.5 rounded text-xs font-mono">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-100 p-2 rounded text-xs overflow-x-auto">
                  {children}
                </pre>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-2 border-gray-300 pl-2 italic">
                  {children}
                </blockquote>
              ),
              h1: ({ children }) => <h1 className="text-lg font-bold mb-2">{children}</h1>,
              h2: ({ children }) => <h2 className="text-base font-bold mb-2">{children}</h2>,
              h3: ({ children }) => <h3 className="text-sm font-bold mb-1">{children}</h3>,
            }}
          >
            {message.text}
          </ReactMarkdown>
        </div>
      );
    }
    
    return <p className="text-sm">{message.text}</p>;
  };

  return (
    <>
      {/* Chat Icon - Always Visible */}
      <div className="fixed bottom-6 right-6 z-50">
        {/* Pulsing Ring Animation */}
        {!hasInteracted && !isOpen && (
          <div className="absolute inset-0 rounded-full bg-orange-400 animate-ping opacity-75"></div>
        )}
        
        {/* Notification Bubble */}
        {showNotification && !isOpen && (
          <div className="absolute -top-2 -left-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full animate-bounce shadow-lg">
            <span className="font-semibold">New!</span>
          </div>
        )}

        {/* Chat Button */}
        <button
          onClick={handleChatOpen}
          className="relative w-14 h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110 flex items-center justify-center group"
          aria-label="Open chat"
        >
          {isOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          )}
          
          {/* Tooltip */}
          {!isOpen && (
            <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white text-sm px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
              Need help? Chat with us!
              <div className="absolute right-0 top-1/2 transform translate-x-1 -translate-y-1/2 w-0 h-0 border-l-4 border-l-gray-900 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
            </div>
          )}
        </button>

        {/* Floating Message */}
        {showNotification && !isOpen && (
          <div className="absolute bottom-16 right-0 bg-white border border-gray-200 rounded-lg shadow-lg p-3 max-w-xs animate-pulse">
            <div className="flex items-start space-x-2">
              <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-900">Hi there! 👋</p>
                <p className="text-xs text-gray-600 mt-1">Need help with your order? I'm here to assist!</p>
              </div>
              <button
                onClick={() => setShowNotification(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Chat Interface */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-80 h-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 flex flex-col">
          {/* Chat Header */}
          <div className="bg-orange-500 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <h3 className="font-semibold">Customer Support</h3>
              </div>
              <span className="text-sm opacity-90">Online</span>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs px-4 py-2 rounded-2xl ${
                      message.sender === 'user'
                        ? 'bg-orange-500 text-white'
                        : 'bg-white text-gray-800 border border-gray-200'
                    }`}
                  >
                    {renderMessageContent(message)}
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-orange-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white text-gray-800 border border-gray-200 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={isLoading ? "Sending..." : "Type your message..."}
                disabled={isLoading}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim() || isLoading}
                className="px-4 py-2 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-300 text-white rounded-lg transition-colors duration-200 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isLoading ? (
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
