import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Hero from './components/Hero';
import MessageCard from './components/MessageCard';
import CircularCarousel from './components/CircularCarousel';
import FloatingImages from './components/FloatingImages';
import ImageGrid from './components/ImageGrid';
import Quote from './components/Quote';
import LoveLetter from './components/LoveLetter';
import FloatingHearts from './components/FloatingHearts';
import Signature from './components/Signature';
import MusicPlayer from './components/MusicPlayer';
import siteConfig from './config';
import './App.css';

function App() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="app">
      {/* Music player */}
      <MusicPlayer />

      {/* Animated gradient background */}
      <div className="gradient-bg"></div>

      {/* Floating hearts animation */}
      <FloatingHearts />

      {/* Floating images animation */}
      <FloatingImages images={siteConfig.floatingImages} />

      {/* Mouse follower effect */}
      <motion.div
        className="cursor-follower"
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 200
        }}
      />

      {/* Main content */}
      <div className="container">
        <Hero title={siteConfig.title} />

        <main className="main-content">
          {/* Circular Carousel - Images rotating around */}
          <CircularCarousel images={siteConfig.carouselImages} />

          {/* Short message */}
          <MessageCard message={siteConfig.message} />

          {/* Large Image Grid */}
          <ImageGrid images={siteConfig.images} />

          {/* Love Letter */}
          <LoveLetter message={siteConfig.letterMessage} />

          {/* Quote - Short */}
          <Quote quote={siteConfig.quote} />

          {/* Signature */}
          <Signature text={siteConfig.signature} />
        </main>
      </div>
    </div>
  );
}

export default App;
