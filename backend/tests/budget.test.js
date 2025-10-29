import request from "supertest";
import express from "express";
import cors from "cors";

// Simulamos tu servidor
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint temporal simulado (ajústalo a tu lógica real)
app.post("/api/budgets", (req, res) => {
  const { name, total } = req.body;
  if (!name || !total) return res.status(400).json({ error: "Datos incompletos" });
  return res.status(201).json({ message: "Presupuesto creado correctamente", name, total });
});

describe("🧪 API /api/budgets", () => {
  it("debería crear un presupuesto correctamente", async () => {
    const res = await request(app)
      .post("/api/budgets")
      .send({ name: "Proyecto Test", total: 1000 });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message");
  });

  it("debería devolver error si faltan datos", async () => {
    const res = await request(app).post("/api/budgets").send({});
    expect(res.statusCode).toBe(400);
  });
});
