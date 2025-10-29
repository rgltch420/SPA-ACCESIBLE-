import admin from "../config/firebaseAdmin.js";

export const verifyToken = async (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) throw new Error("No token");

    const token = header.split(" ")[1];
    const decoded = await admin.auth().verifyIdToken(token);

    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token inválido", error: err.message });
  }
};
