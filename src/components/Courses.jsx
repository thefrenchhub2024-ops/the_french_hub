import { motion } from 'framer-motion';
import Card from './Card';

const courses = [
  {
    title: 'A1–A2–B1–B2 Levels (Express)',
    description: 'Fast-track French learning with intensive sessions. Ideal for quick exam readiness.',
    icon: '⚡',
    details: [
      '6 hrs / week',
      '48 hrs / month',
      'Course Duration: 2 Months',
    ],
  },
  {
    title: 'A1–A2–B1–B2 Levels (Regular)',
    description: 'Balanced pace for steady learning with strong grammar and speaking foundation.',
    icon: '📘',
    details: [
      '4 hrs / week',
      '48 hrs / month',
      'Course Duration: 3 Months',
    ],
  },
  {
    title: 'A1–A2–B1–B2 Levels (Weekend)',
    description: 'Slow-paced option for school students & working professionals.',
    icon: '🕒',
    details: [
      '2 hrs / week',
      '48 hrs / month',
      'Course Duration: 6 Months',
    ],
  },
  {
    title: 'TEF Preparation (Express)',
    description: 'Intensive TEF coaching focused on score improvement strategies.',
    icon: '🎯',
    details: [
      '10 hrs / week',
      '160 hrs total',
      'Course Duration: 4 Months',
    ],
  },
  {
    title: 'IGCSC French Coaching',
    description: 'Specialized coaching aligned with IGCSC French curriculum, focusing on exams, grammar, and speaking skills.',
    icon: '🏫',
    details: [],
  },
  {
    title: 'State Board French Coaching',
    description: 'Structured support for State Board French syllabus with exam-oriented preparation and language fundamentals.',
    icon: '📚',
    details: [],
  },
];


function Courses() {
  return (
    <section id="courses" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF6F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-bold text-3xl sm:text-4xl text-[#0B2C4D] text-center mb-4"
        >
          Our Courses
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#2E2E2E] mb-16 max-w-2xl mx-auto"
        >
          Comprehensive programs designed for every learner—from school students to exam aspirants.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col p-6">
  <span className="text-4xl mb-4">{course.icon}</span>

  <h3 className="font-poppins font-semibold text-[#0B2C4D] text-lg mb-2">
    {course.title}
  </h3>

  <p className="text-[#2E2E2E] text-sm mb-4">
    {course.description}
  </p>

  {course.details.length > 0 && (
    <ul className="text-sm text-[#444] space-y-1 mt-auto">
      {course.details.map((item, i) => (
        <li key={i}>✔ {item}</li>
      ))}
    </ul>
  )}
</Card>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Courses;
