import { motion } from 'framer-motion';

function Duration() {
  return (
    <section id="duration" className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center bg-gradient-to-br from-[#0B2C4D] to-[#1a4a7a] rounded-xl shadow-lg p-12 text-white"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E63946] mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h2 className="font-poppins font-bold text-3xl sm:text-4xl mb-6">
</h2>

<p className="text-lg text-white/90 leading-relaxed mb-6">
  Choose your learning pace based on your goals. We offer regular and express
  tracks for faster certification and fluency.
</p>

<div className="grid sm:grid-cols-2 gap-6 text-left text-sm">
  <div>
    <h4 className="font-semibold text-white mb-2">A1–A2–B1–B2 Levels</h4>
    <ul className="space-y-1 text-white/90">
      <li>⚡ Express: 6 hrs/week → <strong>2 Months</strong></li>
      <li>Regular: 4 hrs/week → 3 Months</li>
      <li>Slow Pace: 2 hrs/week → 6 Months</li>
    </ul>
  </div>

  <div>
    <h4 className="font-semibold text-white mb-2">TEF Preparation</h4>
    <ul className="space-y-1 text-white/90">
      <li>⚡ Express: 10 hrs/week → <strong>4 Months</strong></li>
      <li>Regular: 6 hrs/week → 8 Months</li>
      <li>Slow Pace: 3 hrs/week → 10 Months</li>
    </ul>
  </div>
</div>

<p className="text-white/80 mt-6 text-center">
❗ Exam fees not included
</p>

        </motion.div>
      </div>
    </section>
  );
}

export default Duration;
