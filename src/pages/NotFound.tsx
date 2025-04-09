
import React from 'react';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-md">
        <div className="mb-6">
          <span className="text-8xl font-bold text-scott-purple">404</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          La página que estás buscando no existe o ha sido movida a otra ubicación.
        </p>
        <Button asChild className="bg-scott-purple hover:bg-scott-purple-dark">
          <Link to="/" className="flex items-center gap-2">
            <Home size={18} />
            <span>Volver al inicio</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
