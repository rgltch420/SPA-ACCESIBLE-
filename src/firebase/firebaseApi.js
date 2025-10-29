// src/firebase/firebaseApi.js
import { getAuth } from "firebase/auth";

const API_URL = "http://localhost:5000/api"; // Cambia si tu backend está en otro puerto

async function getToken() {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error("No hay usuario logueado");
  return await user.getIdToken();
}

export async function fetchWithAuth(endpoint, options = {}) {
  const token = await getToken();
  const headers = {
    ...options.headers,
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });
  if (!res.ok) throw new Error((await res.json()).message || "Error en la API");
  return res.json();
}
