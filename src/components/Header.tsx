
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, Heart, Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-scott-purple to-scott-purple-dark">
            Scott
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="flex items-center gap-1 text-gray-600 hover:text-scott-purple">
            <Home size={18} />
            <span>Inicio</span>
          </Link>
          <Link to="/explore" className="flex items-center gap-1 text-gray-600 hover:text-scott-purple">
            <Search size={18} />
            <span>Explorar</span>
          </Link>
          <Link to="/favorites" className="flex items-center gap-1 text-gray-600 hover:text-scott-purple">
            <Heart size={18} />
            <span>Favoritos</span>
          </Link>
        </nav>
        
        <div className="flex md:hidden">
          <button className="text-gray-600 hover:text-scott-purple">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
