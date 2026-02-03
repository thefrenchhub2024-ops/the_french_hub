import { motion } from 'framer-motion';

const ENROLL_FORM_URL = 'https://forms.gle/7iviopeKNY9BMuNV6';

function Enroll() {
  return (
    <section id="enroll" className="scroll-mt-24 py-20 lg:py-28 bg-gradient-to-br from-[#0B2C4D] via-[#1a4a7a] to-[#0B2C4D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4">
            Ready to Master French?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Take the first step. Fill out the form and we'll get back to you with course details 
            and batch availability.
          </p>
          <motion.a
            href={ENROLL_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center bg-[#E63946] text-white px-12 py-4 rounded-xl font-semibold text-lg hover:bg-[#d32f3d] transition-colors shadow-lg"
          >
            Enroll Now
          </motion.a>
          <p className="text-white/70 text-sm mt-6">
            Or call us directly: <a href="tel:9445212518" className="text-white font-semibold hover:underline">+91 9445212518</a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default Enroll;
