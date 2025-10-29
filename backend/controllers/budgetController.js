import admin from "../config/firebaseAdmin.js";
const db = admin.firestore();
const budgetsRef = db.collection("budgets");

export async function getBudgets(req, res) {
  try {
    const userId = req.user.uid;
    const snapshot = await budgetsRef.where("userId", "==", userId).get();
    const budgets = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    res.json(budgets);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener presupuestos", error: err });
  }
}

export async function createBudget(req, res) {
  try {
    const errors = req.errors; // express-validator los coloca aquí si los configuras
    if (errors && errors.length) return res.status(400).json({ errors });

    const userId = req.user.uid;
    const data = req.body;

    const newBudget = { ...data, userId, createdAt: new Date().toISOString() };
    const docRef = await budgetsRef.add(newBudget);
    res.status(201).json({ id: docRef.id, ...newBudget });
  } catch (err) {
    res.status(500).json({ message: "Error al crear presupuesto", error: err });
  }
}

export async function updateBudget(req, res) {
  try {
    const { id } = req.params;
    const data = req.body;
    await budgetsRef.doc(id).update(data);
    res.json({ message: "Presupuesto actualizado" });
  } catch (err) {
    res.status(500).json({ message: "Error al actualizar presupuesto", error: err });
  }
}

export async function deleteBudget(req, res) {
  try {
    const { id } = req.params;
    await budgetsRef.doc(id).delete();
    res.json({ message: "Presupuesto eliminado" });
  } catch (err) {
    res.status(500).json({ message: "Error al eliminar presupuesto", error: err });
  }
}
