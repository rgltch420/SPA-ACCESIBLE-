import React, { useState } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Introduce un correo válido");
      return;
    }
    setError("");
    alert("Gracias por suscribirte!");
    setEmail("");
  };

  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">

        <div className="flex flex-col items-start space-y-4">
          <a href="#" className="flex items-center space-x-2 text-xl font-bold text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 21v-8.25m0 0l-3.235-3.235a4.5 4.5 0 011.018-5.71L12 2.25l2.217 2.217a4.5 4.5 0 011.018 5.71L12 12.75z"
              />
            </svg>
            <span>ARQOS</span>
          </a>
          <p>Hecho con amor y tecnología</p>
        </div>


        <div>
          <h4 className="font-semibold text-white mb-4">LEGALES</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Aviso legal</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Términos y condiciones</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Política de privacidad</a></li>
          </ul>
        </div>


        <div>
          <h4 className="font-semibold text-white mb-4">SABER MÁS</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white transition-colors">Contacto</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Preguntas frecuentes</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
          </ul>
        </div>

       
        <div>
          <h4 className="font-semibold text-white mb-4">SUSCRÍBETE</h4>
          <form className="flex gap-2 mb-2" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Introduce tu email"
              aria-label="Email for subscription"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-3 py-2 rounded-l-md focus:outline-none text-gray-800"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-r-md hover:bg-blue-600 transition-colors"
            >
              OK
            </button>
          </form>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
          <div className="flex gap-4 text-white">
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* Facebook */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 text-whute" fill= "currentColor">
                <path d="M240 363.3L240 576L356 576L356 363.3L442.5 363.3L460.5 265.5L356 265.5L356 230.9C356 179.2 376.3 159.4 428.7 159.4C445 159.4 458.1 159.8 465.7 160.6L465.7 71.9C451.4 68 416.4 64 396.2 64C289.3 64 240 114.5 240 223.4L240 265.5L174 265.5L174 363.3L240 363.3z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* Instagram */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 text-whute" fill= "currentColor">
                <path d="M320.3 205C256.8 204.8 205.2 256.2 205 319.7C204.8 383.2 256.2 434.8 319.7 435C383.2 435.2 434.8 383.8 435 320.3C435.2 256.8 383.8 205.2 320.3 205zM319.7 245.4C360.9 245.2 394.4 278.5 394.6 319.7C394.8 360.9 361.5 394.4 320.3 394.6C279.1 394.8 245.6 361.5 245.4 320.3C245.2 279.1 278.5 245.6 319.7 245.4zM413.1 200.3C413.1 185.5 425.1 173.5 439.9 173.5C454.7 173.5 466.7 185.5 466.7 200.3C466.7 215.1 454.7 227.1 439.9 227.1C425.1 227.1 413.1 215.1 413.1 200.3zM542.8 227.5C541.1 191.6 532.9 159.8 506.6 133.6C480.4 107.4 448.6 99.2 412.7 97.4C375.7 95.3 264.8 95.3 227.8 97.4C192 99.1 160.2 107.3 133.9 133.5C107.6 159.7 99.5 191.5 97.7 227.4C95.6 264.4 95.6 375.3 97.7 412.3C99.4 448.2 107.6 480 133.9 506.2C160.2 532.4 191.9 540.6 227.8 542.4C264.8 544.5 375.7 544.5 412.7 542.4C448.6 540.7 480.4 532.5 506.6 506.2C532.8 480 541 448.2 542.8 412.3C544.9 375.3 544.9 264.5 542.8 227.5zM495 452C487.2 471.6 472.1 486.7 452.4 494.6C422.9 506.3 352.9 503.6 320.3 503.6C287.7 503.6 217.6 506.2 188.2 494.6C168.6 486.8 153.5 471.7 145.6 452C133.9 422.5 136.6 352.5 136.6 319.9C136.6 287.3 134 217.2 145.6 187.8C153.4 168.2 168.5 153.1 188.2 145.2C217.7 133.5 287.7 136.2 320.3 136.2C352.9 136.2 423 133.6 452.4 145.2C472 153 487.1 168.1 495 187.8C506.7 217.3 504 287.3 504 319.9C504 352.5 506.7 422.6 495 452z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* Twitter */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 text-whute" fill= "currentColor">
                <path d="M453.2 112L523.8 112L369.6 288.2L551 528L409 528L297.7 382.6L170.5 528L99.8 528L264.7 339.5L90.8 112L236.4 112L336.9 244.9L453.2 112z"/>
              </svg>
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors">
              {/* YouTube */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="w-6 h-6 text-whute" fill= "currentColor">
                <path d="M581.7 188.1C575.5 164.4 556.9 145.8 533.4 139.5C490.9 128 320.1 128 320.1 128C320.1 128 149.3 128 106.7 139.5C83.2 145.8 64.7 164.4 58.4 188.1C47 231 47 320.4 47 320.4C47 320.4 47 409.8 58.4 452.7C64.7 476.3 83.2 494.2 106.7 500.5C149.3 512 320.1 512 320.1 512C320.1 512 490.9 512 533.5 500.5C557 494.2 575.5 476.3 581.8 452.7C593.2 409.8 593.2 320.4 593.2 320.4C593.2 320.4 593.2 231 581.8 188.1zM264.2 401.6L264.2 239.2L406.9 320.4L264.2 401.6z"/>
              </svg>
            </a>
          </div>
        </div>

      </div>

      <div className="container mx-auto px-6 mt-10 text-center text-xs text-gray-500">
        <p>&copy; 2024 MI SPA ACCESIBLE. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}
