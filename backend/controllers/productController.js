import fs from "fs";
import path from "path";

const productsPath = path.resolve("./models/products.json");

export const getAllProducts = (req, res) => {
  const data = fs.readFileSync(productsPath, "utf-8");
  const products = JSON.parse(data);
  res.json(products);
};

export const getProductById = (req, res) => {
  const data = fs.readFileSync(productsPath, "utf-8");
  const products = JSON.parse(data);
  const product = products.find(p => p.id === parseInt(req.params.id));

  if (!product) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(product);
};
