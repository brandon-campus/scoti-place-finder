
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart, Star, MapPin, DollarSign, Volume2 } from 'lucide-react';
import { getPlaceById } from '../data/places';
import Header from '../components/Header';
import { Button } from '@/components/ui/button';

const PlaceDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const [place, setPlace] = useState(id ? getPlaceById(parseInt(id)) : null);
  const [isFavorite, setIsFavorite] = useState(false);
  
  useEffect(() => {
    if (id) {
      const placeData = getPlaceById(parseInt(id));
      setPlace(placeData);
      
      // Verificar si está en favoritos
      const storedFavorites = localStorage.getItem('favorites');
      if (storedFavorites) {
        const favorites = JSON.parse(storedFavorites);
        setIsFavorite(favorites.includes(parseInt(id)));
      }
    }
  }, [id]);
  
  const handleGoBack = () => {
    navigate(-1);
  };
  
  const handleToggleFavorite = () => {
    const newFavoriteState = !isFavorite;
    setIsFavorite(newFavoriteState);
    
    // Actualizar localStorage
    const storedFavorites = localStorage.getItem('favorites');
    let favorites = storedFavorites ? JSON.parse(storedFavorites) : [];
    
    if (newFavoriteState) {
      favorites.push(parseInt(id!));
    } else {
      favorites = favorites.filter((favId: number) => favId !== parseInt(id!));
    }
    
    localStorage.setItem('favorites', JSON.stringify(favorites));
  };
  
  if (!place) {
    return (
      <div className="min-h-screen bg-gray-50 pt-16 flex items-center justify-center">
        <Header />
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lugar no encontrado</h2>
          <Button onClick={handleGoBack}>Volver</Button>
        </div>
      </div>
    );
  }
  
  const renderPriceRange = (range: number) => {
    return Array(3)
      .fill(0)
      .map((_, i) => (
        <span 
          key={i} 
          className={i < range ? 'text-scott-purple-dark' : 'text-gray-300'}
        >
          $
        </span>
      ));
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-6">
        <button 
          onClick={handleGoBack}
          className="flex items-center gap-1 text-gray-600 hover:text-scott-purple mb-4"
        >
          <ArrowLeft size={18} />
          <span>Volver</span>
        </button>
        
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="relative h-64 md:h-96">
            <img 
              src={place.imageUrl} 
              alt={place.name} 
              className="w-full h-full object-cover"
            />
            <button 
              onClick={handleToggleFavorite}
              className="absolute top-4 right-4 p-3 rounded-full bg-white/80 hover:bg-white shadow-md"
            >
              <Heart 
                size={24} 
                className={isFavorite ? 'fill-scott-purple text-scott-purple' : 'text-gray-500'} 
              />
            </button>
          </div>
          
          <div className="p-6">
            <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-800">{place.name}</h1>
                <div className="flex items-center mt-2">
                  <span className="text-yellow-400 mr-2">
                    <Star size={18} className="fill-yellow-400" />
                  </span>
                  <span className="font-medium">{place.rating}</span>
                  <span className="mx-2 text-gray-400">•</span>
                  <span className="text-gray-600">{place.distance} km</span>
                </div>
              </div>
              
              <div className="flex items-center text-xl font-semibold text-scott-purple-dark">
                {renderPriceRange(place.priceRange)}
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {place.tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 bg-scott-purple-light text-scott-purple-dark rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Descripción</h2>
              <p className="text-gray-700 leading-relaxed">{place.description}</p>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold mb-3">Información</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="text-scott-purple mt-0.5" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">{place.address}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <DollarSign size={20} className="text-scott-purple mt-0.5" />
                  <div>
                    <h3 className="font-medium">Rango de precios</h3>
                    <p className="text-gray-600">
                      {place.priceRange === 1 && 'Económico'}
                      {place.priceRange === 2 && 'Precio medio'}
                      {place.priceRange === 3 && 'Premium'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Volume2 size={20} className="text-scott-purple mt-0.5" />
                  <div>
                    <h3 className="font-medium">Nivel de ruido</h3>
                    <p className="text-gray-600">
                      {place.noiseLevel.charAt(0).toUpperCase() + place.noiseLevel.slice(1)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-between items-center pt-4 border-t">
              <Button
                onClick={() => {/* Implementar función de compartir */}}
                variant="outline"
                className="mr-2"
              >
                Compartir
              </Button>
              
              <Button 
                className="bg-scott-purple hover:bg-scott-purple-dark"
              >
                Reservar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceDetail;
