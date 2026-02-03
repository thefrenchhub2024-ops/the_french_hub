import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-br from-[#0B2C4D] via-[#0d3a6b] to-[#0B2C4D] pt-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="font-poppins font-extrabold text-4xl sm:text-5xl lg:text-6xl mb-4"
            >
              THE FRENCH HUB
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-[#E63946] font-poppins font-semibold text-xl sm:text-2xl mb-6"
            >
              Your Gateway to Master French
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-white/90 text-lg mb-8 max-w-xl"
            >
              Expert coaching for <span className="font-semibold text-white">DELF / DALF, and TEF</span> exams,
  along with Spoken French training (A-Level & B-Level). We also provide academic support for
  <span className="font-semibold text-white"> IGCSC and State Board French syllabus</span>.
  Join us to achieve fluency with personalized attention and proven teaching methods.
            </motion.p>
            <div className="flex flex-wrap gap-3 mb-8">
  <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">DELF / DALF</span>
  <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">TEF Exam</span>
  <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">Spoken French A & B</span>
  <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">IGCSC Support</span>
  <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">State Board Syllabus</span>
</div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#enroll"
                className="inline-flex items-center bg-[#E63946] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#d32f3d] transition-colors shadow-lg"
              >
                Enroll Now
              </a>
              <a
                href="tel:9445212518"
                className="inline-flex items-center bg-white/10 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-colors"
              >
                Call Us
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              <svg
                viewBox="0 0 200 200"
                className="w-full h-full text-white/20"
                fill="currentColor"
              >
                <path d="M100 10 L120 90 L100 80 L80 90 Z" />
                <path d="M50 100 L90 120 L80 100 L90 80 Z" fill="currentColor" opacity="0.3" />
                <path d="M100 100 L100 190 L110 100 Z" fill="currentColor" opacity="0.2" />
                <path d="M150 100 L110 80 L120 100 L110 120 Z" fill="currentColor" opacity="0.3" />
                <path d="M100 10 L100 100 L110 90 L100 80 L90 90 Z" fill="currentColor" opacity="0.4" />
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-8xl sm:text-9xl">🗼</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
