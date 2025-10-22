import React, { useEffect } from "react";

export default function FirstView() {
  useEffect(() => {
    document.body.style.margin = "0";
  }, []);

  return (
    <section
      id="home"
      className="bg-gray-100 py-16 px-5 md:px-10"
      aria-labelledby="firstview-title"
    >
      <div className="flex flex-wrap items-center justify-between gap-10 max-w-[1200px] mx-auto">


        <div className="flex-1 min-w-[500px] text-left">
          <h2
            id="firstview-title"
            className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5"
          >
            ARQOS
          </h2>
          <p className="text-lg text-gray-700 mb-4 leading-relaxed">
            Bienvenido a ARQOS, tu solución de arquitectura accesible. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Labore accusantium necessitatibus
            repellat dolores itaque veritatis iure est eaque mollitia.
          </p>


          <div className="flex flex-wrap gap-4 mt-4">
            <button
              className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-full hover:bg-blue-700 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              aria-label="Empieza ahora"
            >
              Empieza ahora
            </button>
            <button
              className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full border border-blue-600 hover:bg-blue-50 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
              aria-label="Más información"
            >
              Más información
            </button>
          </div>
        </div>

    
        <div className="flex-1 min-w-[300px] flex justify-center items-center">
          <div
            className="w-64 h-64 md:w-80 md:h-80 bg-gray-300 rounded-full flex items-center justify-center text-gray-500 text-base overflow-hidden shadow-xl"
            role="img"
            aria-label="Ilustración alusiva a arquitectura y diseño"
          >
   
          </div>
        </div>

      </div>
    </section>
  );
}
