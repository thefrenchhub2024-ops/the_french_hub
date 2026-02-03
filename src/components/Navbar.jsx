import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/French-Hub-Logo.png';  
const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#courses', label: 'Courses' },
  { href: '#levels', label: 'Levels' },
  { href: '#benefits', label: 'Benefits' },
  { href: '#testimonials', label: 'Testimonials' },
  { href: '#contact', label: 'Contact' },
  { href: '#enroll', label: 'Enroll' },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (isMobile = false) => {
    // Let the browser handle the hash scrolling (most reliable on mobile),
    // but close the menu immediately.
    if (isMobile) setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0B2C4D] shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
        <a href="#home" className="flex items-center gap-3">
  <img 
    src={logo} 
    alt="The French Hub Logo" 
    className="h-10 w-auto object-contain"
  />
  <span className="font-poppins font-bold text-lg md:text-xl text-white leading-tight">
    THE FRENCH HUB
  </span>
</a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => handleNavClick(false)}
                className="text-white/90 hover:text-white font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="tel:9445212518"
              className="bg-[#E63946] text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-[#d32f3d] transition-colors"
            >
              Call
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0B2C4D] border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => handleNavClick(true)}
                  className="block text-white/90 hover:text-white py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="tel:9445212518"
                className="block w-full text-center bg-[#E63946] text-white px-6 py-3 rounded-xl font-semibold"
              >
                Call: 9445212518
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navbar;
