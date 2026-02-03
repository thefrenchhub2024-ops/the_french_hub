import { motion } from 'framer-motion';

const contactItems = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Phone',
    value: '+91 9445212518',
    href: 'tel:9445212518',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'thefrenchhub2024@gmail.com',
    href: 'mailto:thefrenchhub2024@gmail.com',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.06 20.45H3.56V9h3.5v11.45zM5.31 7.56a2.03 2.03 0 110-4.06 2.03 2.03 0 010 4.06zM20.45 20.45h-3.5v-5.6c0-1.33-.02-3.05-1.86-3.05-1.86 0-2.15 1.45-2.15 2.95v5.7h-3.5V9h3.36v1.56h.05c.47-.9 1.63-1.86 3.35-1.86 3.58 0 4.24 2.36 4.24 5.43v6.32z"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'The French Hub',
    href: 'https://www.linkedin.com/in/french-hub-205437346/',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#E63946]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <rect x="3" y="3" width="18" height="18" rx="5" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <circle cx="17" cy="7" r="1.5" fill="currentColor" stroke="none" />
    </svg>
    ),
    label: 'Instagram',
    value: '@the_frenchhub24',
    href: 'https://www.instagram.com/the_frenchhub24?igsh=NnVyeTdybTFrYTNw',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Address',
    value: 'No.05, Rukmani Ammal Street, S1 Harinee Flats, West K.K. Nagar, Chennai – 600078',
    href: 'https://maps.google.com',
  }
];


function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-poppins font-bold text-3xl sm:text-4xl text-[#0B2C4D] text-center mb-4"
        >
          Contact Us
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-[#2E2E2E] mb-16 max-w-2xl mx-auto"
        >
          Get in touch with us. We're here to help you start your French journey.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {contactItems.map((item, index) => (
            <motion.a
              key={index}
              href={item.href}
              target={item.label === 'Instagram' ? '_blank' : undefined}
              rel={item.label === 'Instagram' ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center p-6 rounded-xl shadow-lg bg-[#FAF6F0] hover:shadow-xl hover:bg-[#0B2C4D] hover:text-white transition-all group"
            >
              <div className="text-[#E63946] mb-4 group-hover:text-white transition-colors">{item.icon}</div>
              <p className="font-poppins font-semibold text-[#0B2C4D] group-hover:text-white transition-colors mb-1">{item.label}</p>
              <p className="text-[#2E2E2E] text-sm text-center group-hover:text-white/90">{item.value}</p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
