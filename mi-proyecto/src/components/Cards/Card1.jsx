import { useState, useEffect } from 'react';

const Card = ({ image, text, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  // Detecta si la tarjeta está en el viewport
  const handleScroll = () => {
    const rect = document
      .getElementById(`card-${index}`)
      .getBoundingClientRect();
    if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Registra el evento de scroll al cargar la página
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama inmediatamente para verificar si ya está visible

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id={`card-${index}`}
      className={`relative w-full max-w-[350px] h-[60vh] bg-white shadow-xl rounded-2xl p-4 flex ${
        index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
      } items-center text-left transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      {/* Imagen */}
      <img
        src={image}
        alt="Foto"
        className="w-full h-full object-cover rounded-xl"
      />
      {/* Texto */}
      <div className="w-full px-4 flex flex-col justify-center">
        <p className="text-lg font-semibold">{text}</p>
      </div>
    </div>
  );
};

export default Card;
