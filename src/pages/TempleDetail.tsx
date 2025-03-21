
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Clock, Star } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { getLocationById, getLocationsByType } from '@/data/locations';
import LocationCard from '@/components/LocationCard';
import { Location } from '@/data/locations';

const TempleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [temple, setTemple] = useState<Location | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);
  const [relatedTemples, setRelatedTemples] = useState<Location[]>([]);

  useEffect(() => {
    if (id) {
      const foundTemple = getLocationById(id);
      if (foundTemple && foundTemple.type === 'temple') {
        setTemple(foundTemple);
        document.title = `${foundTemple.name} - themathura`;
        
        // Get related temples
        const temples = getLocationsByType('temple').filter(t => t.id !== id);
        setRelatedTemples(temples.slice(0, 3));
      } else {
        navigate('/not-found');
      }
    }
    setLoading(false);
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-mathura-accent border-t-transparent" />
      </div>
    );
  }

  if (!temple) {
    return null;
  }

  return (
    <div className="bg-mathura-background">
      <Navbar />
      
      <div className="pt-24">
        {/* Hero Section */}
        <div className="relative h-[60vh] overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={temple.images[currentImage]}
              alt={temple.name}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>
          
          <div className="absolute bottom-0 left-0 w-full p-8">
            <div className="mx-auto max-w-7xl">
              <button
                onClick={() => navigate(-1)}
                className="mb-4 flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </button>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-2 text-4xl font-bold text-white md:text-5xl"
              >
                {temple.name}
              </motion.h1>
              
              <div className="flex flex-wrap items-center gap-4 text-white/80">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>{temple.address.split(',')[0]}</span>
                </div>
                
                {temple.openingHours && (
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{temple.openingHours}</span>
                  </div>
                )}
                
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span>{temple.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Image Thumbnails */}
        <div className="mx-auto max-w-7xl px-4 py-4">
          <div className="flex gap-2 overflow-x-auto py-2">
            {temple.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`min-w-20 h-20 overflow-hidden rounded-md transition-all ${
                  index === currentImage ? 'ring-2 ring-mathura-accent' : 'opacity-70'
                }`}
              >
                <img
                  src={image}
                  alt={`${temple.name} ${index + 1}`}
                  className="h-full w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
        
        {/* Content */}
        <div className="mx-auto max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="mb-4 text-2xl font-semibold">About {temple.name}</h2>
                <div className="prose max-w-none text-mathura-text/80">
                  <p>{temple.description}</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="mb-4 text-xl font-semibold">Location</h3>
                  <Map location={temple} />
                </div>
              </motion.div>
            </div>
            
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="mb-4 text-xl font-semibold">Visit Information</h3>
                
                <div className="space-y-4">
                  {temple.openingHours && (
                    <InfoItem icon={<Clock className="h-5 w-5" />} label="Opening Hours" value={temple.openingHours} />
                  )}
                  
                  <InfoItem icon={<MapPin className="h-5 w-5" />} label="Address" value={temple.address} />
                </div>
                
                <hr className="my-6 border-gray-200" />
                
                <h3 className="mb-4 text-xl font-semibold">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {temple.tags.map(tag => (
                    <span
                      key={tag}
                      className="rounded-full bg-mathura-muted px-3 py-1 text-sm font-medium capitalize text-mathura-text"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
        
        {/* Related Temples */}
        {relatedTemples.length > 0 && (
          <div className="mx-auto max-w-7xl px-4 py-16">
            <h2 className="mb-8 text-2xl font-semibold">More Temples to Explore</h2>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTemples.map((temple, index) => (
                <LocationCard key={temple.id} location={temple} index={index} />
              ))}
            </div>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

interface InfoItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const InfoItem = ({ icon, label, value }: InfoItemProps) => (
  <div className="flex items-start gap-3">
    <div className="mt-1 text-mathura-accent">{icon}</div>
    <div>
      <h4 className="font-medium">{label}</h4>
      <p className="text-mathura-text/70">{value}</p>
    </div>
  </div>
);

export default TempleDetail;
