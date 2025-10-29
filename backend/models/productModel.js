import { db } from "../config/firebaseAdmin.js";

const collectionName = "products";

export const getAllProducts = async () => {
  const snapshot = await db.collection(collectionName).get();
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

export const getProductById = async (id) => {
  const doc = await db.collection(collectionName).doc(id).get();
  if (!doc.exists) return null;
  return { id: doc.id, ...doc.data() };
};
