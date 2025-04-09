
export interface Place {
  id: number;
  name: string;
  imageUrl: string;
  tags: string[];
  priceRange: 1 | 2 | 3; // 1=$, 2=$$, 3=$$$
  description: string;
  address: string;
  noiseLevel: 'bajo' | 'medio' | 'alto';
  foodType: string[];
  moodType: ('trabajo' | 'citas' | 'familia' | 'café')[];
  distance: number; // en km
  rating: number;
}

export const places: Place[] = [
  {
    id: 1,
    name: "Café Lumière",
    imageUrl: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FmZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["tranquilo", "buen wifi", "enchufes", "café artesanal"],
    priceRange: 2,
    description: "Un acogedor café con luz natural perfecta para trabajar o estudiar. Wi-Fi rápido y enchufes en cada mesa. Su especialidad es el café de especialidad servido con arte latte.",
    address: "Calle Velázquez 34, Madrid",
    noiseLevel: "bajo",
    foodType: ["café", "brunch", "postres"],
    moodType: ["trabajo", "café"],
    distance: 1.2,
    rating: 4.7
  },
  {
    id: 2,
    name: "La Terraza Botánica",
    imageUrl: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMHRlcnJhY2V8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["romántico", "terraza", "vistas", "cócteles"],
    priceRange: 3,
    description: "Restaurante con espectacular terraza llena de plantas. Vistas panorámicas y ambiente romántico. Ideal para cenas especiales y ocasiones importantes.",
    address: "Paseo de la Castellana 89, Madrid",
    noiseLevel: "medio",
    foodType: ["mediterránea", "fusión", "cócteles"],
    moodType: ["citas"],
    distance: 3.5,
    rating: 4.9
  },
  {
    id: 3,
    name: "Taquería El Mariachi",
    imageUrl: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWV4aWNhbiUyMGZvb2R8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["animado", "comida mexicana", "margaritas", "informal"],
    priceRange: 2,
    description: "Auténtica taquería mexicana con ambiente festivo. Tacos, nachos y las mejores margaritas de la ciudad. Los viernes hay música en vivo.",
    address: "Calle Gran Vía 56, Madrid",
    noiseLevel: "alto",
    foodType: ["mexicana", "tex-mex"],
    moodType: ["familia", "citas"],
    distance: 0.8,
    rating: 4.5
  },
  {
    id: 4,
    name: "Biblioteca Café",
    imageUrl: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeSUyMGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["silencioso", "libros", "café especialidad", "acogedor"],
    priceRange: 1,
    description: "Café dentro de una librería con estanterías repletas de libros que puedes ojear mientras disfrutas de tu bebida. Ambiente silencioso y relajado.",
    address: "Calle Fuencarral 123, Madrid",
    noiseLevel: "bajo",
    foodType: ["café", "pastelería", "sándwiches"],
    moodType: ["trabajo", "café"],
    distance: 2.1,
    rating: 4.8
  },
  {
    id: 5,
    name: "Casa Pepe",
    imageUrl: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8c3BhbmlzaCUyMHJlc3RhdXJhbnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["tradicional", "familiar", "tapas", "económico"],
    priceRange: 2,
    description: "Restaurante familiar con más de 50 años de historia. Cocina tradicional española con productos de mercado. Su tortilla de patatas es famosa en toda la ciudad.",
    address: "Plaza Mayor 3, Madrid",
    noiseLevel: "medio",
    foodType: ["española", "tapas", "casera"],
    moodType: ["familia"],
    distance: 1.5,
    rating: 4.6
  },
  {
    id: 6,
    name: "Digital Hub",
    imageUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29mZmVlJTIwc2hvcCUyMHdvcmt8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["moderno", "coworking", "café gourmet", "eventos tech"],
    priceRange: 2,
    description: "Espacio híbrido entre café y coworking. Fibra óptica de alta velocidad, enchufes en todas las mesas y salas de reuniones disponibles. Organizan eventos tech semanalmente.",
    address: "Calle Orense 12, Madrid",
    noiseLevel: "medio",
    foodType: ["café", "bowls", "comida saludable"],
    moodType: ["trabajo"],
    distance: 3.7,
    rating: 4.5
  },
  {
    id: 7,
    name: "Bistró Parisienne",
    imageUrl: "https://images.unsplash.com/photo-1498654896293-37aacf113fd9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlbmNoJTIwcmVzdGF1cmFudHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60",
    tags: ["romántico", "vino", "gourmet", "íntimo"],
    priceRange: 3,
    description: "Pequeño y elegante bistró con auténtica cocina francesa. Carta de vinos extensa y postres artesanales. Reserva recomendada para cenas románticas.",
    address: "Calle Serrano 45, Madrid",
    noiseLevel: "bajo",
    foodType: ["francesa", "gourmet"],
    moodType: ["citas"],
    distance: 2.3,
    rating: 4.9
  },
  {
    id: 8,
    name: "Parque Café",
    imageUrl: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGFyayUyMGNhZmV8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60",
    tags: ["aire libre", "pet friendly", "desayunos", "brunch"],
    priceRange: 1,
    description: "Café ubicado en el borde del parque con terraza sombreada por árboles. Ideal para desayunos y brunch durante el fin de semana. Admiten mascotas.",
    address: "Parque del Retiro, Madrid",
    noiseLevel: "medio",
    foodType: ["brunch", "bowls", "smoothies"],
    moodType: ["familia", "café"],
    distance: 1.8,
    rating: 4.4
  },
];

export function getPlaceById(id: number): Place | undefined {
  return places.find(place => place.id === id);
}

export function filterPlaces(filters: {
  noiseLevel?: string[];
  priceRange?: number[];
  maxDistance?: number;
  foodType?: string[];
  moodType?: string[];
}): Place[] {
  return places.filter(place => {
    // Verificar nivel de ruido
    if (filters.noiseLevel && filters.noiseLevel.length > 0 && 
        !filters.noiseLevel.includes(place.noiseLevel)) {
      return false;
    }
    
    // Verificar rango de precio
    if (filters.priceRange && filters.priceRange.length > 0 && 
        !filters.priceRange.includes(place.priceRange)) {
      return false;
    }
    
    // Verificar distancia máxima
    if (filters.maxDistance && place.distance > filters.maxDistance) {
      return false;
    }
    
    // Verificar tipos de comida (al menos uno debe coincidir)
    if (filters.foodType && filters.foodType.length > 0 && 
        !place.foodType.some(type => filters.foodType!.includes(type))) {
      return false;
    }
    
    // Verificar tipo de ambiente (al menos uno debe coincidir)
    if (filters.moodType && filters.moodType.length > 0 && 
        !place.moodType.some(type => filters.moodType!.includes(type))) {
      return false;
    }
    
    return true;
  });
}
