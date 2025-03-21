
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { locations } from '@/data/locations';
import AnimatedTransition from '@/components/AnimatedTransition';
import { MapPin, Hotel, Compass, ArrowRight } from 'lucide-react';

const Index = () => {
  return (
    <AnimatedTransition className="bg-mathura-background">
      <Navbar />
      <Hero />
      
      <section id="explore-section" className="relative py-24">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-32 right-10 w-64 h-64 rounded-full bg-mathura-secondary/5 blur-3xl" />
          <div className="absolute bottom-40 left-20 w-72 h-72 rounded-full bg-mathura-accent/5 blur-3xl" />
        </div>
        
        <FeaturedSection />
      </section>
      
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-3 inline-block rounded-full bg-mathura-accent/10 px-5 py-1.5 text-sm font-medium text-mathura-accent">
                Sacred City
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold text-mathura-dark md:text-4xl lg:text-5xl">
                Discover the Birthplace of Lord Krishna
              </h2>
              <p className="mb-6 text-mathura-text/80 text-lg">
                Mathura is one of the seven sacred cities of Hinduism, located in the north Indian state of Uttar Pradesh. It is the birthplace of Lord Krishna and has been a significant cultural and religious center for centuries.
              </p>
              <p className="mb-10 text-mathura-text/80 text-lg">
                The city is situated on the banks of the river Yamuna and is home to numerous temples and religious sites. It attracts millions of pilgrims and tourists every year who come to experience its rich cultural heritage and spiritual ambiance.
              </p>
              
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mathura-secondary/20 text-mathura-secondary shadow-lg shadow-mathura-secondary/10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="flex items-center justify-center"
                    >
                      <MapPin className="h-6 w-6" />
                    </motion.div>
                  </span>
                  <div>
                    <span className="block text-xl font-bold">{locations.filter(l => l.type === 'temple').length}</span>
                    <span className="text-sm font-medium text-mathura-text/70">Temples</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mathura-accent/20 text-mathura-accent shadow-lg shadow-mathura-accent/10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3, type: "spring" }}
                      className="flex items-center justify-center"
                    >
                      <Hotel className="h-6 w-6" />
                    </motion.div>
                  </span>
                  <div>
                    <span className="block text-xl font-bold">{locations.filter(l => l.type === 'hotel').length}</span>
                    <span className="text-sm font-medium text-mathura-text/70">Hotels</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-mathura-secondary/20 text-mathura-secondary shadow-lg shadow-mathura-secondary/10">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4, type: "spring" }}
                      className="flex items-center justify-center"
                    >
                      <Compass className="h-6 w-6" />
                    </motion.div>
                  </span>
                  <div>
                    <span className="block text-xl font-bold">7</span>
                    <span className="text-sm font-medium text-mathura-text/70">Sacred Ghats</span>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <Map locations={locations} height="500px" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-gradient-to-br from-mathura-accent to-mathura-accent/90 py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="mb-6 text-balance text-4xl font-bold md:text-5xl"
          >
            Plan Your Trip to Mathura
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mx-auto mb-10 max-w-2xl text-xl text-white/90"
          >
            Experience the divine essence of Mathura with our handpicked selection of temples and comfortable accommodation options.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/search?type=temple"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 font-medium text-mathura-accent shadow-lg shadow-black/10 transition-all hover:bg-white/90 hover:translate-y-[-2px]"
            >
              Explore Temples
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="/search?type=hotel"
              className="rounded-full border border-white/30 bg-transparent px-8 py-4 font-medium text-white transition-all hover:bg-white/10 hover:border-white/40 hover:translate-y-[-2px]"
            >
              Find Hotels
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </AnimatedTransition>
  );
};

export default Index;
