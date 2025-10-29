import admin from "firebase-admin";
import { createRequire } from "module";

const require = createRequire(import.meta.url);

// Tu archivo de Service Account
const serviceAccount = require("./arqosfirebas.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// 🔹 Exportamos Firestore
export const db = admin.firestore();

export default admin;
