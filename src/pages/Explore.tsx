
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Filter, Grid, List } from 'lucide-react';
import { places, filterPlaces, Place } from '../data/places';
import Header from '../components/Header';
import PlaceCard from '../components/PlaceCard';
import FilterDrawer from '../components/FilterDrawer';
import { Button } from '@/components/ui/button';

const Explore = () => {
  const [filteredPlaces, setFilteredPlaces] = useState<Place[]>(places);
  const [favorites, setFavorites] = useState<number[]>([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [activeFilters, setActiveFilters] = useState<any>({});
  const [isGridView, setIsGridView] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  
  const navigate = useNavigate();
  
  // Cargar favoritos desde localStorage
  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites');
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);
  
  // Guardar favoritos en localStorage cuando cambian
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);
  
  // Aplicar filtros y búsqueda
  useEffect(() => {
    let results = filterPlaces(activeFilters);
    
    // Aplicar búsqueda si hay un query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      results = results.filter(place => 
        place.name.toLowerCase().includes(query) || 
        place.tags.some(tag => tag.toLowerCase().includes(query)) ||
        place.foodType.some(type => type.toLowerCase().includes(query))
      );
    }
    
    setFilteredPlaces(results);
  }, [activeFilters, searchQuery]);
  
  const handleToggleFavorite = (id: number) => {
    setFavorites(prevFavorites => {
      if (prevFavorites.includes(id)) {
        return prevFavorites.filter(favId => favId !== id);
      } else {
        return [...prevFavorites, id];
      }
    });
  };
  
  const handleApplyFilters = (filters: any) => {
    setActiveFilters(filters);
  };
  
  const handleFilterClick = () => {
    setIsFilterOpen(true);
  };
  
  const hasActiveFilters = Object.values(activeFilters).some(
    filter => Array.isArray(filter) ? filter.length > 0 : !!filter
  );
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Explorar lugares</h1>
            <p className="text-gray-600 mt-1">
              Descubre lugares según tus preferencias
            </p>
          </div>
          
          <div className="flex gap-2 w-full md:w-auto">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Buscar lugares..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-64 px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-scott-purple focus:border-scott-purple outline-none"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </span>
            </div>
            
            <Button
              variant="outline"
              onClick={handleFilterClick}
              className={`flex items-center gap-2 ${hasActiveFilters ? 'border-scott-purple text-scott-purple' : ''}`}
            >
              <Filter size={18} />
              <span>Filtros</span>
              {hasActiveFilters && (
                <span className="inline-flex items-center justify-center w-5 h-5 text-xs font-semibold text-white bg-scott-purple rounded-full">
                  {Object.values(activeFilters).flat().filter(Boolean).length}
                </span>
              )}
            </Button>
            
            <div className="hidden md:flex border rounded-lg overflow-hidden">
              <button
                onClick={() => setIsGridView(true)}
                className={`p-2 ${isGridView ? 'bg-scott-purple text-white' : 'bg-white text-gray-600'}`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setIsGridView(false)}
                className={`p-2 ${!isGridView ? 'bg-scott-purple text-white' : 'bg-white text-gray-600'}`}
              >
                <List size={18} />
              </button>
            </div>
          </div>
        </div>
        
        {filteredPlaces.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No se encontraron resultados</h3>
            <p className="text-gray-600 mb-4">
              Intenta con diferentes filtros o términos de búsqueda
            </p>
            <Button 
              onClick={() => {
                setActiveFilters({});
                setSearchQuery('');
              }}
            >
              Limpiar filtros
            </Button>
          </div>
        ) : (
          <div className={isGridView 
            ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
          }>
            {filteredPlaces.map(place => (
              <PlaceCard
                key={place.id}
                place={place}
                isFavorite={favorites.includes(place.id)}
                onToggleFavorite={handleToggleFavorite}
              />
            ))}
          </div>
        )}
      </div>
      
      <FilterDrawer
        isOpen={isFilterOpen}
        onClose={() => setIsFilterOpen(false)}
        onApplyFilters={handleApplyFilters}
        initialFilters={activeFilters}
      />
    </div>
  );
};

export default Explore;
