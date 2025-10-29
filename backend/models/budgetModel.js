import admin from "../config/firebaseAdmin.js";
const db = admin.firestore();

// 🔹 Obtener todos los presupuestos de un usuario
export const getBudgetsByUser = async (userId) => {
  const snapshot = await db
    .collection("users")
    .doc(userId)
    .collection("budgets")
    .get();

  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// 🔹 Crear presupuesto para un usuario
export const createBudgetForUser = async (userId, budgetData) => {
  const docRef = await db
    .collection("users")
    .doc(userId)
    .collection("budgets")
    .add({
      ...budgetData,
      createdAt: new Date().toISOString(),
    });

  return { id: docRef.id, ...budgetData };
};

// 🔹 Actualizar presupuesto del usuario
export const updateBudgetByUser = async (userId, budgetId, budgetData) => {
  const docRef = db
    .collection("users")
    .doc(userId)
    .collection("budgets")
    .doc(budgetId);

  await docRef.set(budgetData, { merge: true });
  const doc = await docRef.get();
  return { id: doc.id, ...doc.data() };
};

// 🔹 Eliminar presupuesto del usuario
export const deleteBudgetByUser = async (userId, budgetId) => {
  const docRef = db
    .collection("users")
    .doc(userId)
    .collection("budgets")
    .doc(budgetId);

  await docRef.delete();
};
