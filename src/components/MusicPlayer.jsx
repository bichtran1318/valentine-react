import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current = new Audio('/valentine-music.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;

    // Auto-play on first user interaction (browsers block autoplay without interaction)
    const autoPlay = () => {
      if (audioRef.current) {
        audioRef.current.play().catch(() => {});
      }
      document.removeEventListener('click', autoPlay);
      document.removeEventListener('touchstart', autoPlay);
      document.removeEventListener('scroll', autoPlay);
    };

    // Try immediate autoplay first
    audioRef.current.play().catch(() => {
      // If blocked, wait for first user interaction
      document.addEventListener('click', autoPlay);
      document.addEventListener('touchstart', autoPlay);
      document.addEventListener('scroll', autoPlay);
    });

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
      document.removeEventListener('click', autoPlay);
      document.removeEventListener('touchstart', autoPlay);
      document.removeEventListener('scroll', autoPlay);
    };
  }, []);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <motion.button
      className="music-player"
      onClick={togglePlay}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      whileHover={{ scale: 1.15 }}
      whileTap={{ scale: 0.9 }}
      title={isPlaying ? 'Pause music' : 'Play music'}
    >
      <div className={`music-icon ${isPlaying ? 'playing' : ''}`}>
        {isPlaying ? (
          <>
            <span className="bar bar1" />
            <span className="bar bar2" />
            <span className="bar bar3" />
            <span className="bar bar4" />
          </>
        ) : (
          <span className="play-triangle">▶</span>
        )}
      </div>

      <AnimatePresence>
        {isPlaying && (
          <motion.div
            className="music-ring"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 0, 0.6] }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MusicPlayer;
