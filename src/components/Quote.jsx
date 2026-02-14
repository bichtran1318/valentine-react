import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

const Quote = ({ quote }) => {
  return (
    <motion.div
      className="quote-section"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="quote-container">
        <motion.div
          className="quote-icon"
          animate={{
            rotate: [0, -10, 10, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaQuoteLeft size={40} />
        </motion.div>

        <blockquote className="quote-text">
          {quote.text}
        </blockquote>

        <cite className="quote-author">— {quote.author}</cite>
      </div>
    </motion.div>
  );
};

export default Quote;
