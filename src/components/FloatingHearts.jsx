import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaStar, FaHeart } from 'react-icons/fa';

const FloatingHearts = () => {
  const [stars, setStars] = useState([]);
  const [shootingStars, setShootingStars] = useState([]);
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Twinkling stars
    const initialStars = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 3,
      size: 6 + Math.random() * 14,
      color: ['#fff', '#e0e7ff', '#fef3c7', '#ddd6fe', '#bfdbfe'][Math.floor(Math.random() * 5)],
    }));
    setStars(initialStars);

    // Shooting stars
    const createShootingStar = (id) => ({
      id,
      startX: Math.random() * 60 + 10,
      startY: Math.random() * 40,
      delay: Math.random() * 8,
      duration: 1.5 + Math.random() * 1,
    });
    setShootingStars(Array.from({ length: 4 }, (_, i) => createShootingStar(i)));

    // Flying hearts
    const initialHearts = Array.from({ length: 12 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 6,
      duration: 8 + Math.random() * 6,
      size: 14 + Math.random() * 18,
      color: ['#f472b6', '#fb7185', '#e879f9', '#c084fc', '#f9a8d4'][Math.floor(Math.random() * 5)],
    }));
    setHearts(initialHearts);
  }, []);

  return (
    <div className="floating-hearts">
      {/* Twinkling stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="floating-heart"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            fontSize: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FaStar color={star.color} />
        </motion.div>
      ))}

      {/* Flying hearts */}
      {hearts.map((heart) => (
        <motion.div
          key={`heart-${heart.id}`}
          className="floating-heart"
          style={{
            left: `${heart.left}%`,
            fontSize: `${heart.size}px`,
          }}
          initial={{ y: '100vh', opacity: 0, rotate: 0 }}
          animate={{
            y: '-100px',
            opacity: [0, 0.8, 0.8, 0],
            rotate: [0, 15, -15, 10, -10, 0],
            x: [0, 30, -20, 25, -15, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          <FaHeart color={heart.color} style={{ filter: `drop-shadow(0 0 6px ${heart.color})` }} />
        </motion.div>
      ))}

      {/* Shooting stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={`shoot-${star.id}`}
          style={{
            position: 'absolute',
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: '3px',
            height: '3px',
            background: '#fff',
            borderRadius: '50%',
            boxShadow: '0 0 6px #fff, -20px 0 15px rgba(255,255,255,0.3), -40px 0 10px rgba(255,255,255,0.1)',
            pointerEvents: 'none',
          }}
          animate={{
            x: [0, 300],
            y: [0, 200],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            repeatDelay: 6 + Math.random() * 8,
            ease: 'easeIn',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingHearts;
