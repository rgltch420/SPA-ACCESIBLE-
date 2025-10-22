import React from "react";

export default function Plans() {
  const plans = [
    {
      title: "Básico",
      description:
        "Plan ideal para proyectos pequeños, con soporte limitado y recursos esenciales.",
      iconDesc: "Icono de paquete básico",
    },
    {
      title: "Intermedio",
      description:
        "Plan para proyectos medianos, con soporte prioritario y funciones avanzadas.",
      iconDesc: "Icono de paquete intermedio",
    },
    {
      title: "Premium",
      description:
        "Plan completo para proyectos grandes, con soporte 24/7 y todas las funciones disponibles.",
      iconDesc: "Icono de paquete premium",
    },
  ];

  return (
    <section
      id="five-view"
      className="py-20 px-6 bg-slate-100"
      aria-labelledby="plans-title"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="plans-title"
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          NUESTROS PLANES
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Elige el plan que mejor se adapte a tus necesidades y al alcance de
          tu proyecto.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {plans.map((plan, index) => (
            <article
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icono con descripción para lectores de pantalla */}
              <div
                className="w-16 h-16 mx-auto mb-4 text-blue-500"
                role="img"
                aria-label={plan.iconDesc}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640">
                  <path d="M160 280C241.7 290.2 433.7 382.3 464 512L72 512C171.5 503.9 256.5 375 160 280zM192 128C224.3 163.6 239.7 211.9 238.4 261.6C321.3 295.3 445.7 385.3 472 512L568 512C527.3 295.9 294.8 143.5 192 128z"/>
                </svg>
              </div>

              <h3 className="text-2xl font-semibold mb-2 text-gray-700">
                {plan.title}
              </h3>
              <p className="text-gray-600">{plan.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
