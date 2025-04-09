
import React from 'react';
import { Heart } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Place } from '../data/places';

interface PlaceCardProps {
  place: Place;
  isFavorite?: boolean;
  onToggleFavorite?: (id: number) => void;
}

const PlaceCard: React.FC<PlaceCardProps> = ({ 
  place, 
  isFavorite = false,
  onToggleFavorite
}) => {
  const navigate = useNavigate();
  
  const renderPriceRange = (range: number) => {
    return Array(3)
      .fill(0)
      .map((_, i) => (
        <span 
          key={i} 
          className={`${i < range ? 'text-scott-purple-dark' : 'text-gray-300'}`}
        >
          $
        </span>
      ));
  };
  
  const handleCardClick = () => {
    navigate(`/place/${place.id}`);
  };
  
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite(place.id);
    }
  };
  
  return (
    <div 
      className="place-card flex flex-col"
      onClick={handleCardClick}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={place.imageUrl} 
          alt={place.name} 
          className="w-full h-full object-cover"
        />
        <button 
          className="absolute top-3 right-3 p-2 rounded-full bg-white/80 hover:bg-white"
          onClick={handleFavoriteClick}
        >
          <Heart 
            size={20} 
            className={isFavorite ? 'fill-scott-purple text-scott-purple' : 'text-gray-500'} 
          />
        </button>
      </div>
      
      <div className="p-4 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold">{place.name}</h3>
          <div className="flex">{renderPriceRange(place.priceRange)}</div>
        </div>
        
        <div className="flex flex-wrap gap-1 mb-3">
          {place.tags.slice(0, 3).map((tag, index) => (
            <span 
              key={index} 
              className="text-xs px-2 py-1 bg-scott-purple-light text-scott-purple-dark rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="mt-auto flex justify-between items-center">
          <span className="text-sm text-gray-500">{place.distance} km</span>
          <div className="flex items-center">
            <span className="text-sm font-medium mr-1">{place.rating}</span>
            <span className="text-yellow-400">★</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCard;
