import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const CircularCarousel = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  // ♓ Pisces symbol layout:
  // Left fish arc (4 nodes) — right fish arc (4 nodes)
  // Connected by a horizontal bar through the middle
  const piscesPositions = [
    // Left fish arc (top to bottom)
    { x: -140, y: -140 },
    { x: -200, y: -55 },
    { x: -200, y: 55 },
    { x: -140, y: 140 },
    // Right fish arc (top to bottom)
    { x: 140, y: -140 },
    { x: 200, y: -55 },
    { x: 200, y: 55 },
    { x: 140, y: 140 },
  ];

  const nodePositions = images.map((_, i) => piscesPositions[i % piscesPositions.length]);

  // Constellation lines tracing the ♓ shape
  const lines = [
    // Left arc
    { from: nodePositions[0], to: nodePositions[1] },
    { from: nodePositions[1], to: nodePositions[2] },
    { from: nodePositions[2], to: nodePositions[3] },
    // Right arc
    { from: nodePositions[4], to: nodePositions[5] },
    { from: nodePositions[5], to: nodePositions[6] },
    { from: nodePositions[6], to: nodePositions[7] },
    // Horizontal bar connecting the two fish (middle nodes)
    { from: nodePositions[1], to: nodePositions[5] },
    { from: nodePositions[2], to: nodePositions[6] },
  ];

  return (
    <div className="constellation-carousel">
      {/* Central featured image with cover-flow */}
      <div className="constellation-featured">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            className="featured-image"
            initial={{ opacity: 0, scale: 0.8, rotateY: 40 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotateY: -40 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            onClick={() => setSelectedImage(images[activeIndex])}
          >
            <img src={images[activeIndex]} alt={`Featured ${activeIndex + 1}`} />
          </motion.div>
        </AnimatePresence>

        <div className="featured-dots">
          {images.map((_, i) => (
            <motion.button
              key={i}
              className={`featured-dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(i)}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </div>
      </div>

      {/* Pisces ♓ constellation */}
      <div className="constellation-container">
        <svg className="constellation-lines" viewBox="-300 -220 600 440">
          {/* Constellation lines */}
          {lines.map((line, i) => (
            <motion.line
              key={i}
              x1={line.from.x}
              y1={line.from.y}
              x2={line.to.x}
              y2={line.to.y}
              stroke="rgba(167, 139, 250, 0.2)"
              strokeWidth="1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: i * 0.12 }}
            />
          ))}

          {/* Pisces ♓ symbol faintly in the center */}
          <motion.text
            x="0"
            y="15"
            textAnchor="middle"
            fontSize="100"
            fill="rgba(167, 139, 250, 0.06)"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
          >
            ♓
          </motion.text>
        </svg>

        {/* Image nodes */}
        {images.map((image, i) => {
          const pos = nodePositions[i];
          const isActive = i === activeIndex;
          const size = isActive ? 80 : 60;

          return (
            <motion.div
              key={i}
              className={`constellation-node ${isActive ? 'active' : ''}`}
              style={{
                width: size,
                height: size,
                left: '50%',
                top: '50%',
              }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              animate={{
                x: pos.x - size / 2,
                y: pos.y - size / 2,
              }}
              transition={{
                delay: i * 0.08,
                type: 'spring',
                stiffness: 120,
              }}
              whileHover={{ scale: 1.4, zIndex: 20 }}
              onClick={() => setActiveIndex(i)}
            >
              <img src={image} alt={`Pisces ${i + 1}`} />
            </motion.div>
          );
        })}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.img
            src={selectedImage}
            alt="Enlarged"
            initial={{ scale: 0.3, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          />
        </motion.div>
      )}
    </div>
  );
};

export default CircularCarousel;
