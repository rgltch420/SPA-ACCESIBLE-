import React from "react";

export default function Revolucionando() {
  const features = [
    {
      title: "Innovación",
      description:
        "Implementamos soluciones creativas y eficientes que transforman tus proyectos en experiencias únicas.",
    },
    {
      title: "Colaboración",
      description:
        "Fomentamos el trabajo conjunto con clientes y equipos para garantizar resultados consistentes y satisfactorios.",
    },
    {
      title: "Resultados",
      description:
        "Nos enfocamos en entregar proyectos de calidad, cumpliendo tiempos, presupuestos y estándares de accesibilidad.",
    },
  ];

  return (
    <section
      id="revolucionando"
      className="py-20 px-6 bg-gray-100"
      aria-labelledby="revolucionando-title"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="revolucionando-title"
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Revolucionando Proyectos
        </h2>
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Transformamos ideas en proyectos exitosos, combinando innovación,
          colaboración y resultados medibles.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <article
              key={index}
              tabIndex={0}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-400"
              aria-label={`${feature.title}: ${feature.description}`}
            >
              <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
