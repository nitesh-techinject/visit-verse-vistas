
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Hotel, Sparkles } from 'lucide-react';
import LocationCard from './LocationCard';
import { getFeaturedLocations, getLocationsByType } from '@/data/locations';

const FeaturedSection = () => {
  const [activeTab, setActiveTab] = useState<'featured' | 'temples' | 'hotels'>('featured');
  
  const getLocations = () => {
    switch (activeTab) {
      case 'featured':
        return getFeaturedLocations();
      case 'temples':
        return getLocationsByType('temple');
      case 'hotels':
        return getLocationsByType('hotel');
      default:
        return getFeaturedLocations();
    }
  };

  const locations = getLocations();

  return (
    <section>
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-5 text-4xl font-bold text-mathura-dark lg:text-5xl"
          >
            Explore Mathura
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto max-w-2xl text-center text-lg text-mathura-text/80"
          >
            Discover sacred temples and comfortable accommodations in the birthplace of Lord Krishna
          </motion.p>
        </div>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          <TabButton 
            isActive={activeTab === 'featured'} 
            onClick={() => setActiveTab('featured')}
            label="Featured"
            icon={<Sparkles className="h-4 w-4" />}
          />
          <TabButton 
            isActive={activeTab === 'temples'} 
            onClick={() => setActiveTab('temples')}
            label="Temples"
            icon={<MapPin className="h-4 w-4" />}
          />
          <TabButton 
            isActive={activeTab === 'hotels'} 
            onClick={() => setActiveTab('hotels')}
            label="Hotels"
            icon={<Hotel className="h-4 w-4" />}
          />
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          >
            {locations.map((location, index) => (
              <LocationCard key={location.id} location={location} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

interface TabButtonProps {
  isActive: boolean;
  onClick: () => void;
  label: string;
  icon?: React.ReactNode;
}

const TabButton = ({ isActive, onClick, label, icon }: TabButtonProps) => (
  <motion.button
    whileHover={{ scale: 1.03 }}
    whileTap={{ scale: 0.97 }}
    onClick={onClick}
    className={`group relative flex items-center gap-2 rounded-full px-6 py-3 font-medium transition-all duration-300 ${
      isActive
        ? 'bg-mathura-accent text-white shadow-lg shadow-mathura-accent/25'
        : 'bg-white text-mathura-text shadow-md shadow-black/5 hover:bg-mathura-muted'
    }`}
  >
    {icon}
    {label}
    {isActive && (
      <motion.div
        layoutId="tab-indicator"
        className="absolute inset-0 rounded-full"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    )}
  </motion.button>
);

export default FeaturedSection;
