
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0 h-full w-full">
        {images.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 h-full w-full"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: currentImage === index ? 1 : 0,
              scale: currentImage === index ? 1 : 1.1
            }}
            transition={{ 
              opacity: { duration: 1.5 },
              scale: { duration: 6 }
            }}
          >
            <img
              src={image}
              alt="Mathura Temple"
              className="h-full w-full object-cover"
            />
          </motion.div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-mathura-background" />
      </div>

      {/* Hero Content */}
      <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-4 py-32 text-center md:items-start md:text-left">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-2 inline-block rounded-full bg-mathura-accent/10 px-4 py-1 text-sm font-medium text-mathura-accent"
        >
          Discover the Divine City
        </motion.span>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 max-w-3xl text-balance text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
        >
          Experience the Spiritual Heritage of <span className="text-mathura-accent">Mathura</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl text-balance text-lg text-white/80 md:text-xl"
        >
          Explore sacred temples, luxurious hotels, and the rich cultural tapestry of Lord Krishna's birthplace.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/search?type=temple"
            className="group flex items-center justify-center gap-2 rounded-full bg-mathura-accent px-6 py-3 font-medium text-white transition-all duration-300 hover:bg-mathura-accent/90"
          >
            Explore Temples
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            to="/search?type=hotel"
            className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20"
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
        className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center"
      >
        <span className="mb-2 text-sm font-medium text-white/70">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="h-10 w-1 rounded-full bg-white/30"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
