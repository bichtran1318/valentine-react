import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';

const LoveLetter = ({ message }) => {
  // Split into sentences for staggered reveal
  const sentences = message.split(/(?<=\.\.\.|\.|!)\s*/);

  return (
    <motion.div
      className="love-letter-section"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="love-letter-card">
        {/* Decorative corner stars */}
        <div className="letter-star letter-star-tl">✦</div>
        <div className="letter-star letter-star-tr">✦</div>
        <div className="letter-star letter-star-bl">✦</div>
        <div className="letter-star letter-star-br">✦</div>

        <motion.div
          className="letter-header"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <FaHeart className="letter-heart-icon" />
          <span>Gửi em yêu,</span>
        </motion.div>

        <div className="letter-body">
          {sentences.map((sentence, i) => (
            <motion.span
              key={i}
              className="letter-sentence"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.3,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              {sentence}{' '}
            </motion.span>
          ))}
        </div>

        <motion.div
          className="letter-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: sentences.length * 0.3 + 0.3, duration: 0.8 }}
        >
          <FaHeart className="letter-heart-icon small" />
          <FaHeart className="letter-heart-icon" />
          <FaHeart className="letter-heart-icon small" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoveLetter;
