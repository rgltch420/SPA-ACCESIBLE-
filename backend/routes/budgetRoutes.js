import express from "express";
import { getBudgets, createBudget, updateBudget, deleteBudget } from "../controllers/budgetController.js";
import { verifyToken } from "../middleware/authMiddleware.js";
import { body } from "express-validator";

const router = express.Router();

// GET todos los presupuestos del usuario
router.get("/", verifyToken, getBudgets);

// POST: Crear un nuevo presupuesto con validación
router.post(
  "/",
  verifyToken,
  body("name").notEmpty().withMessage("El nombre es obligatorio"),
  createBudget
);

// PUT: Actualizar un presupuesto
router.put("/:id", verifyToken, updateBudget);

// DELETE: Eliminar un presupuesto
router.delete("/:id", verifyToken, deleteBudget);

export default router;
