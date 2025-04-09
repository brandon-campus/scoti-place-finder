
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageSquare, MapPin } from 'lucide-react';

const Index = () => {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-scott-purple-light flex flex-col">
      <div className="flex-grow flex flex-col items-center justify-center p-6 mt-10">
        <div className="mb-10 text-center">
          <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-scott-purple to-scott-purple-dark">
            Scott
          </h1>
          <p className="text-xl text-gray-600 max-w-md mx-auto">
            Encuentra el lugar perfecto para cada momento
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-2xl">
          <button 
            onClick={() => navigate('/chat')}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all group"
          >
            <div className="h-20 w-20 rounded-full bg-scott-purple flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
              <MessageSquare size={40} />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-scott-purple-dark">Habla con Scoti</h2>
            <p className="text-gray-600">
              Dile a nuestro asistente qué buscas y te recomendará lugares personalizados
            </p>
          </button>
          
          <button 
            onClick={() => navigate('/explore')}
            className="bg-white shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all group"
          >
            <div className="h-20 w-20 rounded-full bg-scott-purple flex items-center justify-center mx-auto mb-6 text-white group-hover:scale-110 transition-transform">
              <MapPin size={40} />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-scott-purple-dark">Explorar lugares</h2>
            <p className="text-gray-600">
              Descubre nuevos lugares y filtra según tus preferencias
            </p>
          </button>
        </div>
      </div>
      
      <footer className="py-6 text-center text-gray-500 text-sm">
        © 2025 Scott - Tu buscador de lugares
      </footer>
    </div>
  );
};

export default Index;
