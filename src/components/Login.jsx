import { Fragment, useRef, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {registerUser, loginUser, loginWithGoogle} from "../../firebase/auth";
import { useState, useEffect, useRef, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "firebase-admin";


const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      if (mode === "login") {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Inicio de sesión exitoso");
      } else {
        if (password !== confirmPassword) {
          setError("Las contraseñas no coinciden");
          return;
        }
        await createUserWithEmailAndPassword(auth, email, password);
        alert("🎉 Cuenta creada con éxito");
      }

      setEmail("");
      setPassword("");
      setConfirmPassword("");
      onClose();
    } catch (err) {
      setError(err.message);
    }
  };


  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      alert("✅ Sesión iniciada con Google");
      onClose();
    } catch (err) {
      console.error(err);
      setError("Error con Google: " + err.message);
    }
  };

  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto flex items-center justify-center p-4">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="bg-white rounded-lg max-w-md w-full p-6 shadow-xl relative">
              <Dialog.Title className="text-2xl font-bold mb-4 text-center">
                {mode === "login" ? "Iniciar sesión" : "Crear cuenta"}
              </Dialog.Title>

              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 rounded"
                aria-label="Cerrar modal"
              >
                ✕
              </button>

              {error && (
                <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
              )}

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <input
                  ref={firstInputRef}
                  type="email"
                  placeholder="correo@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                <input
                  type="password"
                  placeholder="••••••"
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
                  className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
                >
                  {mode === "login" ? "Iniciar sesión" : "Registrarse"}
                </button>
              </form>

             
              <div className="flex items-center my-4">
                <hr className="flex-grow border-t border-gray-300" />
                <span className="mx-2 text-gray-400 text-sm">O</span>
                <hr className="flex-grow border-t border-gray-300" />
              </div>

          
              {/* <button
                type="button"
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 text-gray-500 hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                <span className="w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                  >
                    <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
                  </svg>
                </span>
                Iniciar sesión con Google
              </button> */}

              <button
                type="button"
                onClick={handleGoogleLogin}
                className="w-full flex items-center justify-center gap-2 border border-gray-300 rounded py-2 text-gray-500 hover:text-blue-600 hover:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-colors"
              >
                <span className="w-5 h-5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 640"
                    fill="currentColor"
                  >
                    <path d="M564 325.8C564 467.3 467.1 568 324 568C186.8 568 76 457.2 76 320C76 182.8 186.8 72 324 72C390.8 72 447 96.5 490.3 136.9L422.8 201.8C334.5 116.6 170.3 180.6 170.3 320C170.3 406.5 239.4 476.6 324 476.6C422.2 476.6 459 406.2 464.8 369.7L324 369.7L324 284.4L560.1 284.4C562.4 297.1 564 309.3 564 325.8z"/>
                  </svg>
                </span>
                Iniciar sesión con Google
              </button>

              <p className="text-xs text-gray-500 text-center mt-4">
                {mode === "login" ? "¿No tienes cuenta? " : "¿Ya tienes cuenta? "}
                <button
                  type="button"
                  className="text-blue-600 font-bold hover:underline focus:outline-none focus:ring-2 focus:ring-blue-400"
                  onClick={() => {
                    setMode(mode === "login" ? "register" : "login");
                    setError("");
                  }}
                >
                  {mode === "login" ? "Crear aquí" : "Iniciar sesión"}
                </button>
              </p>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}
