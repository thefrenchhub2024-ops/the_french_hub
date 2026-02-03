import { motion } from 'framer-motion';

function Card({ children, className = '', hover = true, ...props }) {
  const Component = motion.div;

  return (
    <Component
      className={`rounded-xl shadow-lg bg-white p-6 ${className}`}
      whileHover={hover ? { y: -4, transition: { duration: 0.2 } } : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}

export default Card;
