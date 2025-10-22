import React from "react";

export default function CreateProject() {
  return (
    <section
      id="create-project"
      className="py-20 px-6 bg-gray-100 text-center"
      aria-labelledby="create-project-title"
    >
      <div className="max-w-6xl mx-auto">

        <h2
          id="create-project-title"
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Crea tu Proyecto
        </h2>

 
        <p className="text-gray-700 mb-12 max-w-2xl mx-auto">
          Explora nuestras herramientas y recursos para desarrollar proyectos
          innovadores y de calidad. Aprende a planificar, ejecutar y presentar
          tu obra de manera profesional.
        </p>

    
        <div
          className="relative overflow-hidden w-full rounded-lg shadow-lg"
          style={{ paddingTop: "56.25%" }} // Mantener ratio 16:9
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/aVIV36MjCCo?list=TLGGHS4fbHzSW44yNTA5MjAyNQ"
            title="Obras Civiles - Producción de Videos con Dron"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>


        <p className="mt-4 text-sm text-gray-500">
          Si no puedes reproducir el video, puedes acceder a él directamente en{" "}
          <a
            href="https://www.youtube.com/watch?v=aVIV36MjCCo&list=TLGGHS4fbHzSW44yNTA5MjAyNQ"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            YouTube
          </a>
          .
        </p>
      </div>
    </section>
  );
}
