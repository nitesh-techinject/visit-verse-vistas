
import { motion } from 'framer-motion';
import Hero from '@/components/Hero';
import FeaturedSection from '@/components/FeaturedSection';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Map from '@/components/Map';
import { locations } from '@/data/locations';

const Index = () => {
  return (
    <div className="bg-mathura-background">
      <Navbar />
      <Hero />
      
      <FeaturedSection />
      
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-2 inline-block rounded-full bg-mathura-accent/10 px-4 py-1 text-sm font-medium text-mathura-accent">
                Sacred City
              </span>
              <h2 className="mb-6 text-balance text-3xl font-bold text-mathura-dark md:text-4xl">
                Discover the Birthplace of Lord Krishna
              </h2>
              <p className="mb-6 text-mathura-text/80">
                Mathura is one of the seven sacred cities of Hinduism, located in the north Indian state of Uttar Pradesh. It is the birthplace of Lord Krishna and has been a significant cultural and religious center for centuries.
              </p>
              <p className="mb-8 text-mathura-text/80">
                The city is situated on the banks of the river Yamuna and is home to numerous temples and religious sites. It attracts millions of pilgrims and tourists every year who come to experience its rich cultural heritage and spiritual ambiance.
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mathura-secondary/20 text-mathura-secondary">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 }}
                    >
                      {locations.filter(l => l.type === 'temple').length}
                    </motion.span>
                  </span>
                  <span className="text-sm font-medium">Temples</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mathura-accent/20 text-mathura-accent">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                    >
                      {locations.filter(l => l.type === 'hotel').length}
                    </motion.span>
                  </span>
                  <span className="text-sm font-medium">Hotels</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-mathura-secondary/20 text-mathura-secondary">
                    <motion.span
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                    >
                      7
                    </motion.span>
                  </span>
                  <span className="text-sm font-medium">Sacred Ghats</span>
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Map locations={locations} height="500px" />
            </motion.div>
          </div>
        </div>
      </section>
      
      <section className="relative overflow-hidden bg-mathura-accent py-20 text-white">
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <pattern id="pattern-circles" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
              <circle id="pattern-circle" cx="10" cy="10" r="5" fill="none" stroke="currentColor" strokeWidth="1"></circle>
            </pattern>
            <rect id="rect" x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
          </svg>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-6 text-balance text-3xl font-bold md:text-4xl"
          >
            Plan Your Trip to Mathura
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mx-auto mb-8 max-w-2xl text-white/80"
          >
            Experience the divine essence of Mathura with our handpicked selection of temples and comfortable accommodation options.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <a
              href="/search?type=temple"
              className="rounded-full bg-white px-6 py-3 font-medium text-mathura-accent transition-all hover:bg-white/90"
            >
              Explore Temples
            </a>
            <a
              href="/search?type=hotel"
              className="rounded-full border border-white/30 bg-transparent px-6 py-3 font-medium text-white transition-all hover:bg-white/10"
            >
              Find Hotels
            </a>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
