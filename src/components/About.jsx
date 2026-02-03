import { motion } from 'framer-motion';

function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl text-[#0B2C4D] mb-6">
            Who We Are
          </h2>
          <p className="text-[#2E2E2E] text-lg leading-relaxed mb-6">
            THE FRENCH HUB is a premium French language institute dedicated to helping learners 
            achieve fluency through immersive, practical teaching methods. We believe in learning 
            by doing—our students speak French from day one in real-life contexts.
          </p>
          <p className="text-[#2E2E2E] text-lg leading-relaxed">
            Whether you're preparing for DELF exams, need school-level coaching, or want to 
            master spoken French for travel and career—we tailor our approach to your goals 
            with experienced instructors and a supportive learning community.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
