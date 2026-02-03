import { motion } from 'framer-motion';
import Card from './Card';

const levels = [
  {
    title: 'Beginner (A1–A2)',
    description: 'Start from scratch. Learn alphabets, vocabulary, and basic conversations.',
    features: [
      'Basic greetings & introductions',
      'Everyday vocabulary',
      'Simple sentence structures',
      'Intro to French culture',
    ],
    duration: [
      '⚡ Express: 6 hrs/week → 2 Months',
      'Regular: 4 hrs/week → 3 Months',
      'Slow Pace: 2 hrs/week → 6 Months',
    ],
    color: 'from-[#0B2C4D] to-[#1a4a7a]',
  },
  {
    title: 'Intermediate (B1–B2)',
    description: 'Build fluency, confidence, and exam readiness.',
    features: [
      'Advanced grammar',
      'Extended conversations',
      'Writing & comprehension',
      'DELF exam preparation',
    ],
    duration: [
      '⚡ Express: 6 hrs/week → 2 Months',
      'Regular: 4 hrs/week → 3 Months',
      'Slow Pace: 2 hrs/week → 6 Months',
    ],
    color: 'from-[#0B2C4D] to-[#1a4a7a]',
  },
];

function Levels() {
  return (
    <section id="levels" className="scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-bold text-3xl sm:text-4xl text-[#0B2C4D] text-center mb-4"
        >
          Levels
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#2E2E2E] mb-16 max-w-2xl mx-auto"
        >
          Choose the level that matches your current proficiency. We assess and guide you to the right track.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {levels.map((level, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="h-full border-2 border-[#0B2C4D]/10 p-6 flex flex-col">
  <div className={`inline-block bg-gradient-to-r ${level.color} text-white px-4 py-1 rounded-lg text-sm font-semibold mb-4`}>
    {level.title}
  </div>

  <p className="text-[#2E2E2E] mb-4">{level.description}</p>

  <ul className="space-y-2 mb-6">
    {level.features.map((feature, i) => (
      <li key={i} className="flex items-center gap-2 text-[#2E2E2E]">
        <span className="text-[#E63946]">✓</span>
        {feature}
      </li>
    ))}
  </ul>

  <div className="mt-auto bg-[#FAF6F0] p-4 rounded-lg">
    <h4 className="font-semibold text-[#0B2C4D] mb-2">Duration Options</h4>
    <ul className="text-sm text-[#333] space-y-1">
      {level.duration.map((d, i) => (
        <li key={i}>• {d}</li>
      ))}
    </ul>
  </div>
</Card>

            </motion.div>
          ))}
        </div>
      </div>
      <div className="text-center mt-12 text-sm text-[#333]">
  
  <p>❗ Exam fees are not included</p>
  <p>⚡ Express courses help students complete levels in the shortest time</p>
</div>

    </section>
    
  );
}

export default Levels;
