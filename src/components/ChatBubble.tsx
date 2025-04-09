
import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
  timestamp?: Date;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ 
  message, 
  isUser, 
  timestamp = new Date() 
}) => {
  const formattedTime = timestamp.toLocaleTimeString([], { 
    hour: '2-digit', 
    minute: '2-digit' 
  });
  
  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
      {!isUser && (
        <div className="h-8 w-8 rounded-full bg-gradient-to-r from-scott-purple to-scott-purple-dark flex-shrink-0 mr-2 flex items-center justify-center text-white font-semibold">
          S
        </div>
      )}
      
      <div className={isUser ? 'chat-bubble-user' : 'chat-bubble-bot'}>
        <p>{message}</p>
        <div className={`text-xs mt-1 ${isUser ? 'text-white/70' : 'text-gray-500'} text-right`}>
          {formattedTime}
        </div>
      </div>
      
      {isUser && (
        <div className="h-8 w-8 rounded-full bg-gray-200 flex-shrink-0 ml-2 flex items-center justify-center overflow-hidden">
          <svg className="h-5 w-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default ChatBubble;
