import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useCallback } from 'react';

const FloatingImages = ({ images }) => {
  const [comets, setComets] = useState([]);
  const [idCounter, setIdCounter] = useState(0);

  const createComet = useCallback(() => {
    const id = idCounter;
    setIdCounter(c => c + 1);

    return {
      id,
      src: images[Math.floor(Math.random() * images.length)],
      x: 10 + Math.random() * 80,
      size: 45 + Math.random() * 55,
      duration: 14 + Math.random() * 8,
      wobbleAmp: 15 + Math.random() * 30,
      delay: 0,
    };
  }, [images, idCounter]);

  useEffect(() => {
    const initial = Array.from({ length: 5 }, () => {
      const c = createComet();
      c.delay = Math.random() * 6;
      return c;
    });
    setComets(initial);

    const interval = setInterval(() => {
      setComets(prev => {
        const limited = prev.length > 12 ? prev.slice(-8) : prev;
        return [...limited, createComet()];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div className="bubble-images-container">
      <AnimatePresence>
        {comets.map((comet) => (
          <motion.div
            key={comet.id}
            className="bubble-image"
            style={{
              left: `${comet.x}%`,
              width: comet.size,
              height: comet.size,
            }}
            initial={{
              y: '105vh',
              opacity: 0,
              scale: 0,
            }}
            animate={{
              y: '-15vh',
              opacity: [0, 0.85, 0.85, 0.85, 0],
              scale: [0, 1, 1, 1, 0.5],
              x: [
                0,
                comet.wobbleAmp,
                -comet.wobbleAmp * 0.5,
                comet.wobbleAmp * 0.7,
                0,
              ],
            }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{
              duration: comet.duration,
              delay: comet.delay,
              ease: 'easeInOut',
            }}
          >
            <img src={comet.src} alt="" />
            <div className="bubble-shine" />
            <div className="bubble-ring" />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default FloatingImages;
