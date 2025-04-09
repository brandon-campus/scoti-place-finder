
import React, { useState } from 'react';
import { X, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyFilters: (filters: any) => void;
  initialFilters?: any;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  onApplyFilters,
  initialFilters = {}
}) => {
  const [noiseLevel, setNoiseLevel] = useState<string[]>(initialFilters.noiseLevel || []);
  const [priceRange, setPriceRange] = useState<number[]>(initialFilters.priceRange || []);
  const [maxDistance, setMaxDistance] = useState<number>(initialFilters.maxDistance || 5);
  const [foodTypes, setFoodTypes] = useState<string[]>(initialFilters.foodType || []);
  const [moodTypes, setMoodTypes] = useState<string[]>(initialFilters.moodType || []);
  
  const availableFoodTypes = [
    "café", "brunch", "española", "mexicana", "francesa", 
    "mediterránea", "postres", "comida saludable", "tapas", "gourmet"
  ];
  
  const availableMoodTypes = [
    { id: "trabajo", label: "Trabajo" },
    { id: "citas", label: "Citas" },
    { id: "familia", label: "Familia" },
    { id: "café", label: "Solo café" }
  ];
  
  const toggleNoiseLevel = (level: string) => {
    if (noiseLevel.includes(level)) {
      setNoiseLevel(noiseLevel.filter(l => l !== level));
    } else {
      setNoiseLevel([...noiseLevel, level]);
    }
  };
  
  const togglePriceRange = (price: number) => {
    if (priceRange.includes(price)) {
      setPriceRange(priceRange.filter(p => p !== price));
    } else {
      setPriceRange([...priceRange, price]);
    }
  };
  
  const toggleFoodType = (type: string) => {
    if (foodTypes.includes(type)) {
      setFoodTypes(foodTypes.filter(t => t !== type));
    } else {
      setFoodTypes([...foodTypes, type]);
    }
  };
  
  const toggleMoodType = (type: string) => {
    if (moodTypes.includes(type)) {
      setMoodTypes(moodTypes.filter(t => t !== type));
    } else {
      setMoodTypes([...moodTypes, type]);
    }
  };
  
  const handleApplyFilters = () => {
    onApplyFilters({
      noiseLevel,
      priceRange,
      maxDistance,
      foodType: foodTypes,
      moodType: moodTypes
    });
    onClose();
  };
  
  const handleReset = () => {
    setNoiseLevel([]);
    setPriceRange([]);
    setMaxDistance(5);
    setFoodTypes([]);
    setMoodTypes([]);
  };
  
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-auto">
        <div className="p-4 border-b sticky top-0 bg-white z-10 flex justify-between items-center">
          <h2 className="text-xl font-semibold">Filtros</h2>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-gray-100"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-8">
          {/* Nivel de ruido */}
          <div>
            <h3 className="text-lg font-medium mb-4">Nivel de ruido</h3>
            <div className="flex flex-wrap gap-2">
              {['bajo', 'medio', 'alto'].map(level => (
                <button
                  key={level}
                  onClick={() => toggleNoiseLevel(level)}
                  className={`px-4 py-2 rounded-full border ${
                    noiseLevel.includes(level)
                      ? 'bg-scott-purple text-white border-scott-purple'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-scott-purple'
                  }`}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Rango de precios */}
          <div>
            <h3 className="text-lg font-medium mb-4">Rango de precios</h3>
            <div className="flex gap-3">
              {[1, 2, 3].map(price => (
                <button
                  key={price}
                  onClick={() => togglePriceRange(price)}
                  className={`h-12 w-12 rounded-full border flex items-center justify-center ${
                    priceRange.includes(price)
                      ? 'bg-scott-purple text-white border-scott-purple'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-scott-purple'
                  }`}
                >
                  {'$'.repeat(price)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Distancia máxima */}
          <div>
            <div className="flex justify-between mb-2">
              <h3 className="text-lg font-medium">Distancia máxima</h3>
              <span className="text-scott-purple font-medium">{maxDistance} km</span>
            </div>
            <input
              type="range"
              min="1"
              max="10"
              step="0.5"
              value={maxDistance}
              onChange={(e) => setMaxDistance(parseFloat(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-scott-purple"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>1 km</span>
              <span>10 km</span>
            </div>
          </div>
          
          {/* Tipos de comida */}
          <div>
            <h3 className="text-lg font-medium mb-4">Tipo de comida</h3>
            <div className="flex flex-wrap gap-2">
              {availableFoodTypes.map(type => (
                <button
                  key={type}
                  onClick={() => toggleFoodType(type)}
                  className={`px-4 py-2 rounded-full border ${
                    foodTypes.includes(type)
                      ? 'bg-scott-purple text-white border-scott-purple'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-scott-purple'
                  }`}
                >
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </button>
              ))}
            </div>
          </div>
          
          {/* Estado de ánimo */}
          <div>
            <h3 className="text-lg font-medium mb-4">Estado de ánimo</h3>
            <div className="grid grid-cols-2 gap-3">
              {availableMoodTypes.map(({ id, label }) => (
                <button
                  key={id}
                  onClick={() => toggleMoodType(id)}
                  className={`px-4 py-3 rounded-xl border flex items-center justify-center ${
                    moodTypes.includes(id)
                      ? 'bg-scott-purple text-white border-scott-purple'
                      : 'bg-white text-gray-700 border-gray-300 hover:border-scott-purple'
                  }`}
                >
                  {moodTypes.includes(id) && <Check size={16} className="mr-2" />}
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        <div className="p-6 border-t sticky bottom-0 bg-white">
          <div className="flex gap-4">
            <Button 
              onClick={handleReset}
              variant="outline" 
              className="flex-1"
            >
              Limpiar
            </Button>
            <Button 
              onClick={handleApplyFilters}
              className="flex-1 bg-scott-purple hover:bg-scott-purple-dark"
            >
              Aplicar filtros
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterDrawer;
