
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    'https://images.unsplash.com/photo-1591777334728-783c11d777ec?q=80&w=1000',
    'https://images.unsplash.com/photo-1593005510329-8a4035a7238f?q=80&w=1000',
    'https://images.unsplash.com/photo-1565356345925-2ba582f15296?q=80&w=1000'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const scrollToExplore = () => {
    const exploreSection = document.querySelector('#explore-section');
    if (exploreSection) {
      exploreSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 h-full w-full">
        <AnimatePresence>
          {images.map((image, index) => (
            currentImage === index && (
              <motion.div
                key={image}
                className="absolute inset-0 h-full w-full"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ 
                  opacity: { duration: 1.5, ease: "easeInOut" },
                  scale: { duration: 6, ease: "easeInOut" }
                }}
              >
                <img
                  src={image}
                  alt="Mathura Temple"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            )
          ))}
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-mathura-background" />
      </div>

      {/* Floating Elements - Decorative */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-mathura-accent/20 backdrop-blur-xl animate-pulse" style={{animationDuration: '8s'}} />
        <div className="absolute bottom-1/3 right-1/3 h-20 w-20 rounded-full bg-mathura-secondary/20 backdrop-blur-xl animate-pulse" style={{animationDuration: '5s'}} />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-32 text-center md:items-start md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-3 inline-block rounded-full bg-mathura-accent/15 px-5 py-1.5 text-sm font-medium text-mathura-accent backdrop-blur-sm"
        >
          Discover the Divine City
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mb-6 max-w-3xl text-balance text-5xl font-bold leading-tight text-white md:text-6xl lg:text-7xl"
        >
          Experience the Spiritual Heritage of <span className="text-mathura-accent">Mathura</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-10 max-w-2xl text-balance text-lg text-white/90 md:text-xl"
        >
          Explore sacred temples, luxurious hotels, and the rich cultural tapestry of Lord Krishna's birthplace.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/search?type=temple"
            className="group flex items-center justify-center gap-2 rounded-full bg-mathura-accent px-8 py-4 font-medium text-white shadow-lg shadow-mathura-accent/20 transition-all duration-300 hover:bg-mathura-accent/90 hover:shadow-mathura-accent/30 hover:translate-y-[-2px]"
          >
            Explore Temples
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/search?type=hotel"
            className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:translate-y-[-2px]"
          >
            Find Hotels
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center cursor-pointer"
        onClick={scrollToExplore}
      >
        <span className="mb-2 text-sm font-medium text-white/70">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-6 w-6 text-white/70" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
