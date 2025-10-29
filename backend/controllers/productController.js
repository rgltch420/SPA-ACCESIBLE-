import * as ProductModel from "../models/productModel.js";

export const getAllProducts = async (req, res) => {
  try {
    const products = await ProductModel.getAllProducts();
    res.json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener productos" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const product = await ProductModel.getProductById(req.params.id);
    if (!product) return res.status(404).json({ message: "Producto no encontrado" });
    res.json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error al obtener producto" });
  }
};
