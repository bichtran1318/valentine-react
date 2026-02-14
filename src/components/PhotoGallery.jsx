import { motion } from 'framer-motion';
import { useState } from 'react';

const PhotoGallery = ({ photos }) => {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <div className="photo-gallery-section">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Our Moments 📸
      </motion.h2>

      <div className="photo-gallery">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            className="photo-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ scale: 1.05, zIndex: 10 }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <img src={photo.url} alt={photo.caption} />
            <motion.div
              className="photo-overlay"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <p>{photo.caption}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Modal for enlarged photo */}
      {selectedPhoto && (
        <motion.div
          className="photo-modal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPhoto(null)}
        >
          <motion.img
            src={selectedPhoto.url}
            alt={selectedPhoto.caption}
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring" }}
          />
          <p>{selectedPhoto.caption}</p>
        </motion.div>
      )}
    </div>
  );
};

export default PhotoGallery;
