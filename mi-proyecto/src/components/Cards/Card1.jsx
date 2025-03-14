import { useState, useEffect } from 'react';

const Card1 = ({ image, text, index }) => {
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
      className={`relative w-full max-w-[350px] bg-white shadow-xl rounded-2xl p-4 flex flex-col md:flex-row items-center text-left transition-all duration-1000 ease-in-out ${
        isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
      }`}
    >
      {/* Imagen */}
      <img
        src={image}
        alt="Foto"
        className="w-full md:w-1/2 h-auto object-cover rounded-xl"
      />

      {/* Contenedor del texto */}
      <div className="w-full md:w-1/2 px-4 flex flex-col justify-center text-center md:text-left">
        <p className="text-lg font-semibold break-words">{text}</p>
      </div>
    </div>
  );
};

export default Card1;
