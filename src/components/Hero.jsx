import { motion } from 'framer-motion';

const Hero = ({ title }) => {
  const titleVariants = {
    hidden: { opacity: 0, scale: 0.5 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <motion.header
      className="hero"
      initial="hidden"
      animate="visible"
      variants={titleVariants}
    >
      <motion.h1
        className="hero-title"
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {title}
      </motion.h1>

      <motion.div
        className="hero-hearts"
        animate={{
          scale: [1, 1.3, 1],
          filter: [
            'drop-shadow(0 0 20px rgba(150,100,255,0.5))',
            'drop-shadow(0 0 50px rgba(150,100,255,0.9))',
            'drop-shadow(0 0 20px rgba(150,100,255,0.5))',
          ],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <span style={{ fontSize: '5rem' }}>♓</span>
      </motion.div>

    </motion.header>
  );
};

export default Hero;
