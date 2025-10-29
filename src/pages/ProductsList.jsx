// src/components/ProductsList.jsx
import React, { useEffect, useState } from "react";
import { fetchWithAuth } from "../firebase/firebaseApi";

export default function ProductsList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchWithAuth("/products");
        setProducts(data);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  if (loading) return <p>Cargando productos...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <div className="p-4 bg-white rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Productos disponibles</h2>
      {products.length === 0 ? (
        <p>No hay productos aún.</p>
      ) : (
        <ul className="space-y-2">
          {products.map((p) => (
            <li key={p.id} className="flex justify-between border p-2 rounded">
              <span>{p.name}</span>
              <span>${p.price} / {p.unit}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
