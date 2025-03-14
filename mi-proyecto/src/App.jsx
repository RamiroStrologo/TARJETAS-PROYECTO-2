import './App.css';
import Card1 from './components/Cards/Card1';
import Sparkles from './components/Chispas/Sparkles';

function App() {
  const cardsData = [
    { image: '/i1.jpg', text: 'MAQUINAS' },
    { image: '/i2.webp', text: 'PANTERA NEGRA TURBO' },
    { image: '/i3.jpg', text: 'GUARAIPA GOLEADOR' },
    { image: '/i4.png', text: 'GUARAIPA FORTACHON' },
    { image: '/i5.jpg', text: 'SEXOLOYOLA' },
    { image: '/i6.jpeg', text: 'EL MANTO SAGRADO' },
    { image: '/i7.jfif', text: 'AKD CULO ROTO' },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Efecto de chispas */}
        <Sparkles />

        {/* Encabezado siempre visible */}
        <header className="sticky top-0 z-20 bg-gradient-to-b from-pink-400 to-pink-200 text-white p-4 text-center flex justify-center flex-col w-full shadow-md">
          <span className="text-lg sm:text-xl md:text-2xl font-bold">
            DANIELA
          </span>
          <span className="text-sm sm:text-lg md:text-xl">MIS 39 + 1</span>
        </header>

        {/* Contenido principal */}
        <main className="flex-grow p-4 md:p-6">
          <div className="min-h-screen flex flex-col items-center justify-center p-6 space-y-6">
            {cardsData.map((card, index) => (
              <Card1
                key={index}
                image={card.image}
                text={card.text}
                index={index}
              />
            ))}
          </div>
        </main>

        {/* Pie de página */}
        <footer className="bg-gradient-to-b from-pink-400 to-pink-200 text-white p-4 text-center">
          PIE DE PAGINA
        </footer>
      </div>
    </>
  );
}

export default App;
