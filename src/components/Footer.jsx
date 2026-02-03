import { motion } from 'framer-motion';

function Footer() {
  return (
    <footer className="bg-[#0B2C4D] text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2"
          >
            <h3 className="font-poppins font-bold text-2xl mb-4">THE FRENCH HUB</h3>
            <p className="text-white/80 mb-4 max-w-md">
              Your Gateway to Master French. Expert coaching in DELF preparation, spoken French, 
              and school-level French for learners of all ages.
            </p>
            <p className="text-[#E63946] font-semibold">Tel: +91 9445212518</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-poppins font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-white/80">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#courses" className="hover:text-white transition-colors">Courses</a></li>
              <li><a href="#levels" className="hover:text-white transition-colors">Levels</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#enroll" className="hover:text-white transition-colors">Enroll</a></li>
            </ul>
          </motion.div>
        </div>
        <div className="border-t border-white/20 pt-8 text-center text-white/70 text-sm">
          <p>© {new Date().getFullYear()} THE FRENCH HUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
