import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const SparkleEffect = () => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateSparkles = () => {
      const newSparkles = Array.from({ length: 20 }).map(() => ({
        id: Math.random(),
        x: Math.random() * window.innerWidth,
        y: -10, // Inicia arriba de la pantalla
        size: Math.random() * 6 + 4, // Tamaño entre 4px y 10px
        delay: Math.random() * 5, // Retrasos aleatorios
      }));
      setSparkles(newSparkles);
    };

    generateSparkles();
    const interval = setInterval(generateSparkles, 3000); // Genera cada 3s

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          initial={{ opacity: 0, y: sparkle.y }}
          animate={{ opacity: [0, 1, 0.5, 0], y: '100vh' }}
          transition={{ duration: 4, delay: sparkle.delay, ease: 'easeInOut' }}
          className="absolute bg-white rounded-full shadow-lg"
          style={{
            width: sparkle.size,
            height: sparkle.size,
            left: sparkle.x,
            backgroundColor: 'gold',
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default SparkleEffect;
