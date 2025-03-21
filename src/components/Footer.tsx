
import { motion } from 'framer-motion';
import { ArrowUpRight, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-mathura-dark py-16 text-white">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Link to="/" className="mb-6 inline-block">
                <span className="font-serif text-2xl font-bold tracking-tight text-mathura-accent">
                  themathura
                </span>
              </Link>
              <p className="mb-6 max-w-xs text-white/70">
                Discover the spiritual heritage of Mathura, the birthplace of Lord Krishna with handpicked temples and hotels.
              </p>
              <div className="flex gap-4">
                <SocialLink href="#" icon={<Facebook className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Instagram className="h-5 w-5" />} />
                <SocialLink href="#" icon={<Twitter className="h-5 w-5" />} />
              </div>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h4 className="mb-6 text-lg font-semibold">Quick Links</h4>
              <ul className="space-y-3">
                <FooterLink label="Home" to="/" />
                <FooterLink label="Temples" to="/search?type=temple" />
                <FooterLink label="Hotels" to="/search?type=hotel" />
                <FooterLink label="Search" to="/search" />
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h4 className="mb-6 text-lg font-semibold">Support</h4>
              <ul className="space-y-3">
                <FooterLink label="Contact Us" to="#" />
                <FooterLink label="FAQ" to="#" />
                <FooterLink label="Privacy Policy" to="#" />
                <FooterLink label="Terms of Service" to="#" />
              </ul>
            </motion.div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h4 className="mb-6 text-lg font-semibold">Newsletter</h4>
              <p className="mb-4 text-white/70">
                Subscribe to our newsletter for the latest updates on Mathura travel.
              </p>
              <form className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-md border-0 bg-white/10 px-4 py-2 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-mathura-accent"
                />
                <button
                  type="submit"
                  className="flex items-center justify-center rounded-r-md bg-mathura-accent px-4 text-white transition-colors hover:bg-mathura-accent/90"
                >
                  <ArrowUpRight className="h-5 w-5" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 border-t border-white/10 pt-8 text-center text-sm text-white/50"
        >
          <p>© {currentYear} themathura.com. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-mathura-accent"
  >
    {icon}
  </a>
);

const FooterLink = ({ label, to }: { label: string; to: string }) => (
  <li>
    <Link
      to={to}
      className="inline-block text-white/70 transition-colors hover:text-mathura-accent"
    >
      {label}
    </Link>
  </li>
);

export default Footer;
