import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login({ onClose }) {
  const { login, register, loginWithGoogle } = useAuth(); // Hooks de AuthContext
  const navigate = useNavigate();
  const [mode, setMode] = useState("login"); // login o register
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const firstInputRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await login(email, password);
      } else {
        if (password !== confirmPassword) {
          setError("Las contraseñas no coinciden");
          return;
        }
        await register(email, password);
      }
      onClose();             // Cierra modal
      navigate("/dashboard"); // Redirige al dashboard
      setEmail("");           // Limpia campos
      setPassword("");
      setConfirmPassword("");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    try {
      await loginWithGoogle();
      onClose();
      navigate("/dashboard");
    } catch (err) {
      setError("Error con Google: " + err.message);
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <div className="fixed inset-0 bg-black/50" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="bg-white p-6 rounded shadow w-full max-w-md">
            <Dialog.Title className="text-xl font-bold mb-4">
              {mode === "login" ? "Iniciar sesión" : "Registrarse"}
            </Dialog.Title>

            {error && <p className="text-red-500 mb-2">{error}</p>}

            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                ref={firstInputRef}
                type="email"
                placeholder="Correo electrónico"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              {mode === "register" && (
                <input
                  type="password"
                  placeholder="Confirmar contraseña"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              )}

              <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                {mode === "login" ? "Entrar" : "Registrarse"}
              </button>
            </form>

            <button
              onClick={handleGoogleLogin}
              className="w-full mt-3 py-2 border rounded flex justify-center items-center gap-2 text-gray-500 hover:text-blue-600 hover:border-blue-600 transition"
            >
              Iniciar sesión con Google
            </button>

            <p className="mt-3 text-center text-sm text-gray-500">
              {mode === "login" ? "¿No tienes cuenta?" : "¿Ya tienes cuenta?"}{" "}
              <span
                className="text-blue-500 cursor-pointer hover:underline"
                onClick={() => setMode(mode === "login" ? "register" : "login")}
              >
                {mode === "login" ? "Regístrate" : "Inicia sesión"}
              </span>
            </p>

            <button
              onClick={onClose}
              className="mt-3 w-full text-gray-500 hover:underline"
            >
              Cerrar
            </button>
          </Dialog.Panel>
        </div>
      </Dialog>
    </Transition>
  );
}
