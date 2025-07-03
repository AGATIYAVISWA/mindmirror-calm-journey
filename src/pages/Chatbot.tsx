
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { MessageCircle, Send, Bot, User } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const botResponses = [
    "I hear you. It's completely normal to feel this way sometimes. What's been on your mind lately?",
    "Thank you for sharing that with me. Your feelings are valid. How can I support you today?",
    "It sounds like you're going through a challenging time. Remember, you're stronger than you know. 💙",
    "That's a lot to process. Have you tried any relaxation techniques like deep breathing?",
    "I'm here to listen without judgment. What would help you feel a little better right now?",
    "Your awareness of your feelings shows great emotional intelligence. How are you taking care of yourself?",
    "Sometimes just talking about our feelings can lighten the load. I'm glad you're here.",
    "Every small step counts in your mental health journey. What's one thing you're grateful for today?",
    "It's okay to not be okay sometimes. What brings you comfort when you're feeling this way?",
    "You've shown courage by reaching out. How has journaling been helping you process your thoughts?"
  ];

  const encouragingResponses = [
    "That's wonderful to hear! It's amazing how much strength you have. 🌟",
    "I'm so glad you're feeling better! What's been helping you the most?",
    "Your positive outlook is inspiring. Keep nurturing that inner strength! 💚",
    "That's fantastic! Celebrating these moments is so important for your well-being.",
    "It's beautiful to hear about your progress. You should be proud of yourself! ✨"
  ];

  useEffect(() => {
    // Initial bot message
    const initialMessage: Message = {
      id: 1,
      text: "Hey, I'm here for you. How are you feeling today? 🌸",
      isBot: true,
      timestamp: new Date()
    };
    setMessages([initialMessage]);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    // Positive sentiment responses
    if (lowerMessage.includes('good') || lowerMessage.includes('great') || 
        lowerMessage.includes('happy') || lowerMessage.includes('better') ||
        lowerMessage.includes('awesome') || lowerMessage.includes('wonderful')) {
      return encouragingResponses[Math.floor(Math.random() * encouragingResponses.length)];
    }
    
    // Specific keyword responses
    if (lowerMessage.includes('anxious') || lowerMessage.includes('anxiety')) {
      return "Anxiety can feel overwhelming, but you're not alone. Try the 4-7-8 breathing technique: breathe in for 4, hold for 7, exhale for 8. Would you like to try it together?";
    }
    
    if (lowerMessage.includes('sad') || lowerMessage.includes('depressed')) {
      return "I'm sorry you're feeling this way. Your feelings are completely valid. Sometimes sadness is our heart's way of processing. What usually brings you small moments of comfort?";
    }
    
    if (lowerMessage.includes('stressed') || lowerMessage.includes('overwhelmed')) {
      return "Feeling overwhelmed is tough. Let's break things down into smaller pieces. What's one small thing you could do right now to take care of yourself?";
    }
    
    if (lowerMessage.includes('tired') || lowerMessage.includes('exhausted')) {
      return "Mental and emotional exhaustion is real. Your mind and body might be asking for rest. Have you been able to get enough sleep lately?";
    }
    
    // Default responses
    return botResponses[Math.floor(Math.random() * botResponses.length)];
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now(),
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 2000); // Random delay between 1-3 seconds
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const quickResponses = [
    "I'm feeling anxious",
    "I had a good day",
    "I'm feeling overwhelmed",
    "I need some support"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Mental Health Support Chat
          </h1>
          <p className="text-lg text-muted-foreground">
            A safe space to share your thoughts and feelings
          </p>
        </div>

        <Card className="glass-card gentle-shadow">
          <CardHeader>
            <CardTitle className="flex items-center text-calm-blue">
              <MessageCircle className="mr-2" size={20} />
              Chat with MindMirror Bot
            </CardTitle>
          </CardHeader>
          <CardContent>
            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto mb-4 p-4 bg-gradient-to-b from-blue-50/30 to-purple-50/30 rounded-lg border">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex items-start mb-4 ${
                    message.isBot ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`flex items-start space-x-2 max-w-xs lg:max-w-md ${
                    message.isBot ? 'flex-row' : 'flex-row-reverse space-x-reverse'
                  }`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot 
                        ? 'bg-gradient-to-r from-calm-blue to-blue-300' 
                        : 'bg-gradient-to-r from-gentle-green to-green-300'
                    }`}>
                      {message.isBot ? (
                        <Bot size={16} className="text-white" />
                      ) : (
                        <User size={16} className="text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg ${
                      message.isBot
                        ? 'bg-white border border-calm-blue/20 text-foreground'
                        : 'bg-gradient-to-r from-gentle-green to-green-300 text-white'
                    }`}>
                      <p className="text-sm leading-relaxed">{message.text}</p>
                      <p className="text-xs opacity-70 mt-1">
                        {message.timestamp.toLocaleTimeString([], { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-start justify-start mb-4">
                  <div className="flex items-start space-x-2">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-calm-blue to-blue-300 flex items-center justify-center">
                      <Bot size={16} className="text-white" />
                    </div>
                    <div className="bg-white border border-calm-blue/20 p-3 rounded-lg">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-calm-blue rounded-full animate-pulse-soft"></div>
                        <div className="w-2 h-2 bg-calm-blue rounded-full animate-pulse-soft" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-calm-blue rounded-full animate-pulse-soft" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Response Buttons */}
            <div className="flex flex-wrap gap-2 mb-4">
              {quickResponses.map((response, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  onClick={() => setInputText(response)}
                  className="text-xs border-calm-blue/30 text-calm-blue hover:bg-calm-blue hover:text-white smooth-transition"
                >
                  {response}
                </Button>
              ))}
            </div>

            {/* Message Input */}
            <div className="flex space-x-2">
              <Input
                placeholder="Type your message... I'm here to listen 💙"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1 border-2 border-calm-blue/20 focus:border-calm-blue focus:ring-calm-blue rounded-xl"
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="bg-gradient-to-r from-calm-blue to-blue-400 hover:from-blue-400 hover:to-blue-500 text-white smooth-transition"
              >
                <Send size={18} />
              </Button>
            </div>

            {/* Disclaimer */}
            <p className="text-xs text-muted-foreground mt-4 text-center">
              This is a supportive chat simulation. For professional help, please reach out to a qualified mental health provider.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chatbot;
