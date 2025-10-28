import fs from "fs";
import path from "path";

const budgetsPath = path.resolve("./models/budgets.json");

export const getBudgets = (req, res) => {
  const data = fs.readFileSync(budgetsPath, "utf-8");
  const budgets = JSON.parse(data);
  res.json(budgets);
};

export const createBudget = (req, res) => {
  const { userId, items } = req.body;

  if (!userId || !items) {
    return res.status(400).json({ message: "Faltan datos" });
  }

  const data = fs.readFileSync(budgetsPath, "utf-8");
  const budgets = JSON.parse(data);

  const newBudget = {
    id: budgets.length + 1,
    userId,
    items,
    createdAt: new Date().toISOString(),
  };

  budgets.push(newBudget);
  fs.writeFileSync(budgetsPath, JSON.stringify(budgets, null, 2));

  res.status(201).json(newBudget);
};
