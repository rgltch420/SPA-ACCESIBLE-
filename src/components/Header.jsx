import { useState, useEffect } from "react";

export default function Header({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 w-full flex justify-between items-center transition-all duration-500 shadow-md
  px-6 md:px-12 ${scrolled ? "bg-slate-800 text-white py-6" : "bg-slateblue text-textmain py-8"}`}
  aria-label="Menú principal"
    >
      <h1 className="text-2xl md:text-3xl font-bold px-6">ARQOS</h1>

      <ul className="hidden md:flex gap-8 text-lg font-semibold px-6">
        <li>
          <a href="#revolucionando" className="transition-colors duration-300 hover:text-golden focus:outline-none focus:ring-2 focus:ring-golden">
            Inicio
          </a>
        </li>
        <li>
          <a href="#services" className="transition-colors duration-300 hover:text-golden focus:outline-none focus:ring-2 focus:ring-golden">
            Services
          </a>
        </li>
        <li>
          <a href="#create-project" className="transition-colors duration-300 hover:text-golden focus:outline-none focus:ring-2 focus:ring-golden">
            Crea tu proyecto
          </a>
        </li>
      </ul>

      <button
        onClick={onOpenModal}
        className="hidden md:block px-6 py-3 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400"
      >
        Iniciar Sesión
      </button>
    </nav>
  );
}
