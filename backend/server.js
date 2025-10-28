import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productRoutes from "./routes/productRoutes.js";
import budgetRoutes from "./routes/budgetRoutes.js";
import { verifyToken } from "./middleware/authMiddleware.js"; // 👈 importa el middleware

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// 🧩 Rutas públicas (no necesitan login)
app.get("/", (req, res) => res.send("Backend activo 🚀"));

// 🧠 Aplica el middleware solo a las rutas que quieras proteger
app.use("/api/products", verifyToken, productRoutes); // 🔐 protegida
app.use("/api/budgets", verifyToken, budgetRoutes);   // 🔐 protegida

// Si tuvieras rutas que deben ser accesibles sin login, déjalas sin el middleware:
// app.use("/api/public", publicRoutes);

const PORT = process.env.P || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`)
);
