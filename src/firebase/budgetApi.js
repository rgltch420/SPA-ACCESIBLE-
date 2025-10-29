// src/firebase/budgetApi.js
import { getAuth } from "firebase/auth";

const API_URL = "http://localhost:5000/api";

async function fetchWithToken(endpoint, options = {}) {
  const auth = getAuth();
  const user = auth.currentUser;
  if (!user) throw new Error("Usuario no autenticado");

  const token = await user.getIdToken();

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...options.headers,
  };

  const res = await fetch(`${API_URL}${endpoint}`, { ...options, headers });

  if (!res.ok) {
    const error = await res.text();
    throw new Error(error);
  }

  return res.json();
}

// Funciones de presupuestos usando fetchWithToken
export const getBudgets = () => fetchWithToken("/budgets");
export const createBudget = (budgetData) => fetchWithToken("/budgets", {
  method: "POST",
  body: JSON.stringify(budgetData),
});
export const updateBudget = (id, data) => fetchWithToken(`/budgets/${id}`, {
  method: "PUT",
  body: JSON.stringify(data),
});
export const deleteBudget = (id) => fetchWithToken(`/budgets/${id}`, {
  method: "DELETE",
});
