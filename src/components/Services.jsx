import React from "react";

export default function Services() {
  const services = [
    { title: "Diseño Arquitectónico", description: "Creamos planos y diseños funcionales y estéticos adaptados a tus necesidades." },
    { title: "Gestión de Proyectos", description: "Planificamos y supervisamos proyectos para garantizar eficiencia y cumplimiento de tiempos." },
    { title: "Consultoría Técnica", description: "Brindamos asesoría especializada en construcción, normativa y accesibilidad." },
    { title: "Visualización 3D", description: "Modelamos tus ideas en renders y maquetas digitales para mejor comprensión." },
    { title: "Reformas y Renovaciones", description: "Mejoramos espacios existentes cumpliendo estándares de calidad y accesibilidad." },
    { title: "Sostenibilidad", description: "Proyectos con enfoque ecológico y eficiencia energética." },
  ];

  return (
    <section
      id="services-section"
      className="py-20 px-6 bg-gray-50"
      aria-labelledby="services-title"
    >
      <div className="max-w-6xl mx-auto text-center">
        <h2
          id="services-title"
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Nuestros Servicios
        </h2>
        <p className="text-gray-700 mb-12">
          Ofrecemos soluciones para optimizar tus proyectos, asegurando calidad y accesibilidad.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <article
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-400"
              tabIndex={0}
              aria-label={`${service.title}: ${service.description}`}
            >
              <div className="text-blue-600 mb-4 flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1-2.25M15 17l.75 3l1-2.25M14 10h.75m0 0a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM15 4a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM12 9a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM8 8a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5zM18 10a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {service.title}
              </h3>
              <p className="text-gray-700">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
