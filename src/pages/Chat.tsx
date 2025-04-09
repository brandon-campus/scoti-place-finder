
import React, { useState, useRef, useEffect } from 'react';
import { Send, Mic, PlusCircle, X } from 'lucide-react';
import Header from '../components/Header';
import ChatBubble from '../components/ChatBubble';
import { Button } from '@/components/ui/button';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: '1',
    text: '¡Hola! Soy Scoti, tu asistente virtual. ¿Qué tipo de lugar estás buscando hoy?',
    isUser: false,
    timestamp: new Date(),
  },
];

const QUICK_RESPONSES = [
  "Lugar para trabajar con buen WiFi",
  "Restaurante romántico para una cita",
  "Cafetería tranquila para leer",
  "Restaurante familiar para el fin de semana"
];

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showQuickResponses, setShowQuickResponses] = useState(true);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  // Auto-scroll al último mensaje
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Simular respuesta del bot
  const simulateBotResponse = (userMessage: string) => {
    setIsTyping(true);
    
    // Respuestas predefinidas basadas en palabras clave
    let botResponse = '';
    const lowerCaseMessage = userMessage.toLowerCase();
    
    setTimeout(() => {
      if (lowerCaseMessage.includes('trabajar') || lowerCaseMessage.includes('wifi')) {
        botResponse = 'Te recomiendo "Digital Hub" o "Café Lumière". Ambos tienen excelente WiFi y enchufes en todas las mesas. ¿Te gustaría saber más sobre alguno de ellos?';
      } else if (lowerCaseMessage.includes('romántico') || lowerCaseMessage.includes('cita')) {
        botResponse = 'Para una cita romántica, "La Terraza Botánica" y "Bistró Parisienne" son excelentes opciones. Ambos tienen ambiente íntimo y comida deliciosa. ¿Cuál prefieres?';
      } else if (lowerCaseMessage.includes('familia') || lowerCaseMessage.includes('niños')) {
        botResponse = 'Para una salida familiar, recomiendo "Casa Pepe" o "Parque Café". Son espacios acogedores y con opciones para todos. ¿Te interesa alguno?';
      } else if (lowerCaseMessage.includes('café') || lowerCaseMessage.includes('tranquilo')) {
        botResponse = 'Si buscas un lugar tranquilo para tomar un café, "Biblioteca Café" es perfecto. También "Café Lumière" tiene un ambiente relajado. ¿Qué te parece?';
      } else {
        botResponse = 'Entiendo lo que buscas. ¿Podrías darme más detalles sobre el tipo de lugar, como el ambiente, tipo de comida o rango de precios que prefieres?';
      }
      
      const newMessage = {
        id: Date.now().toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, newMessage]);
      setIsTyping(false);
    }, 1500);
  };
  
  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    const newMessage = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setInputText('');
    setShowQuickResponses(false);
    
    // Simular respuesta del bot
    simulateBotResponse(inputText);
  };
  
  const handleQuickResponse = (response: string) => {
    const newMessage = {
      id: Date.now().toString(),
      text: response,
      isUser: true,
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, newMessage]);
    setShowQuickResponses(false);
    
    // Simular respuesta del bot
    simulateBotResponse(response);
  };
  
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16 flex flex-col">
      <Header />
      
      <div className="max-w-2xl mx-auto w-full flex-grow flex flex-col px-4 py-6">
        <div className="mb-4 text-center">
          <div className="h-16 w-16 rounded-full bg-gradient-to-r from-scott-purple to-scott-purple-dark mx-auto mb-2 flex items-center justify-center text-white text-2xl font-bold animate-float">
            S
          </div>
          <h1 className="text-2xl font-bold text-gray-800">Scoti</h1>
          <p className="text-gray-600">Tu asistente para encontrar el lugar perfecto</p>
        </div>
        
        <div className="flex-grow overflow-y-auto mb-4 bg-white rounded-lg shadow-sm p-4">
          <div className="space-y-2">
            {messages.map(message => (
              <ChatBubble
                key={message.id}
                message={message.text}
                isUser={message.isUser}
                timestamp={message.timestamp}
              />
            ))}
            
            {isTyping && (
              <div className="flex items-center gap-2 text-gray-500 mt-3">
                <div className="h-8 w-8 rounded-full bg-gradient-to-r from-scott-purple to-scott-purple-dark flex-shrink-0 flex items-center justify-center text-white text-sm font-semibold">
                  S
                </div>
                <div className="bg-gray-200 px-3 py-2 rounded-full">
                  <div className="flex space-x-1">
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="h-2 w-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            {showQuickResponses && (
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm text-gray-500 mb-2">Sugerencias rápidas:</p>
                <div className="flex flex-wrap gap-2">
                  {QUICK_RESPONSES.map((response, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickResponse(response)}
                      className="px-3 py-2 bg-scott-purple-light text-scott-purple-dark rounded-full text-sm hover:bg-scott-purple hover:text-white transition-colors"
                    >
                      {response}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm p-3 flex items-center gap-2">
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-500 hover:text-scott-purple"
          >
            <PlusCircle size={20} />
          </Button>
          
          <input
            ref={inputRef}
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Escribe un mensaje..."
            className="flex-grow px-3 py-2 bg-transparent outline-none"
          />
          
          <Button 
            variant="ghost" 
            size="icon" 
            className="text-gray-500 hover:text-scott-purple"
          >
            <Mic size={20} />
          </Button>
          
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={handleSendMessage}
            disabled={!inputText.trim()}
            className={`${
              inputText.trim() 
                ? 'text-scott-purple hover:bg-scott-purple-light' 
                : 'text-gray-400'
            }`}
          >
            <Send size={20} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
