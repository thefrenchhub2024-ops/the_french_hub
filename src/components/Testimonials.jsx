import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    name: 'Sree Anirudhan Alwar',
    role: 'Professional',
    text: 'The lessons were well-structured, the instructor was knowledgeable and patient, and the learning environment was supportive. I feel much more confident in my understanding of the language. Highly recommended for anyone looking to learn French effectively.',
    rating: 5,
  },
  {
    name: 'Harish',
    role: 'School Student',
    text: 'Great coaching and tailored person to person teaching with convenient timings…… it was truly worth….',
    rating: 5,
  },
  {
    name: 'Harini Velmurugan',
    role: 'Spoken French Learner',
    text: 'Good and easily understandable coaching',
    rating: 5,
  },
  {
    name: 'Karthick Anandan',
    role: 'Student',
    text: 'Very affordable & easy to understand specially very kind friendly coaching',
    rating: 5,
  },
  {
    name: 'Meenakshi Dhivakar',
    role: 'Professional',
    text: '“My son was one of her students. He didn’t like French at first, but whenever he attended her classes, he started enjoying the subject. She made learning French interesting and engaging for him. Now, he was went in belgium. 😍 She is an excellent teacher, despite being young. Her punctuality and dedication stand out, and she has a natural ability to motivate children. Honestly, words cannot fully express how remarkable. 🙏🙏🙏',
    rating: 5,
  },
];

const Star = () => (
  <svg className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="scroll-mt-24 py-20 lg:py-28 bg-[#FAF6F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-bold text-3xl sm:text-4xl text-[#0B2C4D] text-center mb-4"
        >
          Testimonials
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#2E2E2E] mb-16 max-w-2xl mx-auto"
        >
          What our students say about learning French with us.
        </motion.p>

        <div className="max-w-3xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center"
            >
              <div className="flex justify-center gap-1 mb-6">
                {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                  <Star key={i} />
                ))}
              </div>
              <p className="text-[#2E2E2E] text-lg italic mb-6">
                "{testimonials[currentIndex].text}"
              </p>
              <div>
                <p className="font-poppins font-semibold text-[#0B2C4D]">{testimonials[currentIndex].name}</p>
                <p className="text-[#E63946] text-sm">{testimonials[currentIndex].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-[#E63946] scale-125' : 'bg-[#0B2C4D]/30'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Arrows */}
          <button
            onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-2 text-[#0B2C4D] hover:text-[#E63946] transition-colors"
            aria-label="Previous testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-2 text-[#0B2C4D] hover:text-[#E63946] transition-colors"
            aria-label="Next testimonial"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
