import { motion } from 'framer-motion';

const MessageCard = ({ message }) => {
  return (
    <motion.div
      className="message-card-minimal"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, type: "spring" }}
    >
      <motion.p
        className="message-text-large"
        animate={{
          opacity: [1, 0.8, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {message}
      </motion.p>
    </motion.div>
  );
};

export default MessageCard;
