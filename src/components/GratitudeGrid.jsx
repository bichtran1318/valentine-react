import { motion } from 'framer-motion';

const GratitudeGrid = ({ items }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.5, rotate: -180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10
      }
    }
  };

  return (
    <div className="gratitude-section">
      <motion.div
        className="gratitude-grid-minimal"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {items.map((item) => (
          <motion.div
            key={item.id}
            className="gratitude-item-minimal"
            variants={itemVariants}
            whileHover={{
              scale: 1.3,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.5 }
            }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              className="gratitude-icon-large"
              animate={{
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {item.icon}
            </motion.div>
            <h4>{item.title}</h4>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default GratitudeGrid;
