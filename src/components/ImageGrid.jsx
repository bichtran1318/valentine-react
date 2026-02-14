import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useState, useRef } from 'react';

const ImageGrid = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="image-grid-section">
      <div className="circle-image-grid">
        {images.map((image, index) => (
          <CircleImageItem
            key={image.id}
            image={image}
            index={index}
            onClick={() => setSelectedImage(image)}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedImage && (
        <motion.div
          className="image-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="modal-content"
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: 'spring', stiffness: 200, damping: 18 }}
          >
            <img src={selectedImage.url} alt={selectedImage.caption} style={{ borderRadius: '50%' }} />
            <p>{selectedImage.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

const CircleImageItem = ({ image, index, onClick }) => {
  const ref = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-0.5, 0.5], [15, -15]);
  const rotateY = useTransform(mouseX, [-0.5, 0.5], [-15, 15]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    mouseX.set((e.clientX - centerX) / rect.width);
    mouseY.set((e.clientY - centerY) / rect.height);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className="circle-grid-item"
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.12,
        duration: 0.7,
        type: 'spring',
        stiffness: 150,
      }}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
      }}
      whileHover={{
        scale: 1.15,
        zIndex: 10,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
    >
      <div className="circle-image-wrapper">
        <img src={image.url} alt={image.caption} />
        <motion.div
          className="circle-image-ring"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="circle-image-ring ring-2"
          animate={{ rotate: -360 }}
          transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
        />
      </div>
      <motion.p
        className="circle-image-caption"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: index * 0.12 + 0.3 }}
      >
        {image.caption}
      </motion.p>
    </motion.div>
  );
};

export default ImageGrid;
