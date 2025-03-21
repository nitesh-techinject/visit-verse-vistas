
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Star, ArrowRight } from 'lucide-react';
import { Location } from '@/data/locations';

interface LocationCardProps {
  location: Location;
  index: number;
}

const LocationCard = ({ location, index }: LocationCardProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const getPath = () => {
    return `/${location.type}/${location.id}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px]"
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
          <motion.div 
            className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"
            animate={{ opacity: isHovered ? 0.9 : 0.6 }}
            transition={{ duration: 0.3 }}
          />
          
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
        
        <div className="p-6">
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
                className="rounded-full bg-mathura-muted px-3 py-1 text-xs font-medium text-mathura-text"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <motion.div 
            className="mt-6 flex items-center justify-end text-mathura-accent font-medium text-sm"
            animate={{ 
              x: isHovered ? 0 : 5,
              opacity: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </motion.div>
        </div>
      </Link>
    </motion.div>
  );
};

export default LocationCard;
