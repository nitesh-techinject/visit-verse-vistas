
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star } from 'lucide-react';
import { Location } from '@/data/locations';

interface LocationCardProps {
  location: Location;
  index: number;
}

const LocationCard = ({ location, index }: LocationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  
  const getPath = () => {
    return `/${location.type}/${location.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl"
    >
      <Link to={getPath()}>
        <div className="relative h-64 overflow-hidden">
          <div
            className={`image-lazy-load absolute inset-0 bg-gray-200 ${
              imageLoaded ? 'loaded' : ''
            }`}
            style={{
              backgroundImage: `url(${location.images[0]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <img
            src={location.images[0]}
            alt={location.name}
            className="h-full w-full object-cover opacity-0"
            onLoad={() => setImageLoaded(true)}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-70" />
          
          <motion.div 
            className="absolute bottom-0 left-0 right-0 p-6 text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            <h3 className="text-xl font-medium text-balance">{location.name}</h3>
            <div className="mt-2 flex items-center gap-2">
              <MapPin size={16} className="opacity-75" />
              <p className="text-sm opacity-75">{location.address.split(',')[0]}</p>
            </div>
          </motion.div>
        </div>
        
        <div className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium">{location.rating.toFixed(1)}</span>
            </div>
            <span className="rounded-full bg-mathura-muted px-3 py-1 text-xs font-medium capitalize text-mathura-text">
              {location.type}
            </span>
          </div>
          
          <p className="text-sm line-clamp-2 text-gray-600">{location.shortDescription}</p>
          
          <div className="mt-4 flex flex-wrap gap-2">
            {location.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="rounded-full bg-mathura-muted px-2 py-1 text-xs text-mathura-text"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LocationCard;
