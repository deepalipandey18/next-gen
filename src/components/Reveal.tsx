import React from 'react';
    import { motion, useReducedMotion } from 'framer-motion';

    interface RevealProps {
      children: React.ReactNode;
      delay?: number;
      className?: string;
    }

    const Reveal: React.FC<RevealProps> = ({ children, delay = 0, className }) => {
      const reduce = useReducedMotion();
      return (
        <motion.div
          className={className}
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5, delay, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      );
    };

    export default Reveal;