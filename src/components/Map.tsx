
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Location } from '@/data/locations';

interface MapProps {
  location?: Location;
  locations?: Location[];
  height?: string;
}

const Map = ({ location, locations, height = '400px' }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // In a real implementation, you would integrate with a mapping API
    // like Google Maps, Mapbox, or Leaflet here
    
    // For now, we'll simulate a map loading
    const timer = setTimeout(() => {
      setMapLoaded(true);
    }, 1000);
    
    return () => clearTimeout(timer);
  }, [location, locations]);

  return (
    <div 
      ref={mapRef} 
      className="relative overflow-hidden rounded-xl"
      style={{ height }}
    >
      {!mapLoaded ? (
        <div className="flex h-full w-full items-center justify-center bg-gray-100">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-mathura-accent border-t-transparent" />
        </div>
      ) : (
        <>
          {/* This would be replaced with an actual map component */}
          <div className="h-full w-full bg-mathura-secondary/20">
            <img 
              src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1000"
              alt="Map" 
              className="h-full w-full object-cover opacity-40"
            />
          </div>
          
          <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <h3 className="mb-2 text-xl font-medium text-mathura-dark">
                {location ? location.name : 'Explore Mathura'}
              </h3>
              <p className="mb-4 text-mathura-text/70">
                {location 
                  ? location.address 
                  : 'Discover temples and hotels in this sacred city'}
              </p>
              <a
                href={`https://maps.google.com/?q=${location?.coordinates.lat},${location?.coordinates.lng}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-mathura-accent px-5 py-2 text-sm font-medium text-white transition-all hover:bg-mathura-accent/90"
              >
                Get Directions
                <ArrowRight className="h-4 w-4" />
              </a>
            </motion.div>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
