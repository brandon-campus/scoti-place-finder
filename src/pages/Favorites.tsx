
import React, { useState, useEffect } from 'react';
import { places, Place } from '../data/places';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';

const Favorites = () => {
  const [favoritesList, setFavoritesList] = useState<Place[]>([]);
  const [favoriteIds, setFavoriteIds] = useState<number[]>([]);
  
  // Cargar favoritos desde localStorage al montar el componente
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      const favoriteIds = JSON.parse(storedFavorites);
      setFavoriteIds(favoriteIds);
      
      // Obtener los lugares favoritos
      const favoritePlaces = places.filter(place => 
        favoriteIds.includes(place.id)
      );
      setFavoritesList(favoritePlaces);
    }
  }, []);
  
  const handleToggleFavorite = (id: number) => {
    setFavoriteIds(prevIds => {
      const newFavoriteIds = prevIds.filter(favId => favId !== id);
      localStorage.setItem('favorites', JSON.stringify(newFavoriteIds));
      return newFavoriteIds;
    });
    
    setFavoritesList(prevList => 
      prevList.filter(place => place.id !== id)
    );
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Tus favoritos</h1>
          <p className="text-gray-600 mt-1">
            Lugares que has guardado para visitar después
          </p>
        </div>
        
        {favoritesList.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No tienes favoritos</h3>
            <p className="text-gray-600">
              Explora lugares y marca tus favoritos haciendo clic en el corazón
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {favoritesList.map(place => (
              <PlaceCard
                key={place.id}
                place={place}
                isFavorite={true}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
