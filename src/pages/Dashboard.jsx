import { useEffect, useState } from "react";
import {
  getBudgets,
  createBudget,
  updateBudget,
  deleteBudget,
} from "../firebase/budgetApi";
import products from "../../backend/models/products.json";

export default function Dashboard() {
  const [projects, setProjects] = useState([]);
  const [editingProject, setEditingProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Cargar presupuestos al iniciar
  useEffect(() => {
    (async () => {
      try {
        const data = await getBudgets();
        setProjects(data);
      } catch (err) {
        console.error("Error al cargar presupuestos:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Crear nuevo proyecto y abrir modal automáticamente
  const handleCreate = async () => {
  try {
    console.log("🟢 Creando nuevo presupuesto...");
    const newProject = {
      name: "Proyecto sin título",
      items: [],
    };

    const saved = await createBudget(newProject);
    console.log("✅ Presupuesto guardado:", saved);

    setProjects([...projects, saved]);
    setEditingProject(saved);
  } catch (err) {
    console.error("❌ Error al crear presupuesto:", err);
    alert("Error al crear el presupuesto. Revisa la consola.");
  }
  };


  

  // Eliminar proyecto
  const handleDelete = async (id) => {
    if (confirm("¿Seguro que deseas eliminar este proyecto?")) {
      await deleteBudget(id);
      setProjects(projects.filter((p) => p.id !== id));
    }
  };

  // Abrir editor
  const handleEdit = (project) => setEditingProject({ ...project });

  // Guardar cambios
  const handleSave = async () => {
    await updateBudget(editingProject.id, editingProject);
    setProjects((prev) =>
      prev.map((p) => (p.id === editingProject.id ? editingProject : p))
    );
    setEditingProject(null);
  };

  // Cambiar nombre del proyecto
  const handleNameChange = (e) =>
    setEditingProject({ ...editingProject, name: e.target.value });

  // Agregar producto
  const addItem = (product) => {
    const exists = editingProject.items.find((i) => i.id === product.id);
    let newItems;
    if (exists) {
      newItems = editingProject.items.map((i) =>
        i.id === product.id ? { ...i, quantity: i.quantity + 1 } : i
      );
    } else {
      newItems = [...editingProject.items, { ...product, quantity: 1 }];
    }
    setEditingProject({ ...editingProject, items: newItems });
  };

  // Eliminar producto
  const removeItem = (id) =>
    setEditingProject({
      ...editingProject,
      items: editingProject.items.filter((i) => i.id !== id),
    });

  // Calcular total
  const total = (project) =>
    project.items.reduce((acc, i) => acc + i.price * i.quantity, 0);

  if (loading) return <p>Cargando presupuestos...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Tus Presupuestos</h1>
      <button
        onClick={handleCreate}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-6"
      >
        + Crear nuevo
      </button>

      {projects.length === 0 ? (
        <p>No tienes presupuestos aún.</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p) => (
            <div key={p.id} className="bg-white p-4 rounded shadow">
              <h2 className="font-bold text-lg">{p.name}</h2>
              <p>Total: ${total(p)}</p>
              <div className="flex gap-2 mt-2">
                <button
                  onClick={() => handleEdit(p)}
                  className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                >
                  Editar
                </button>
                <button
                  onClick={() => handleDelete(p.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal de edición */}
      {editingProject && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-xl">
            <h2 className="text-xl font-bold mb-3">Editar Presupuesto</h2>
            <input
              type="text"
              value={editingProject.name}
              onChange={handleNameChange}
              className="w-full border p-2 rounded mb-4"
            />

            <h3 className="font-semibold mb-2">Insumos:</h3>
            {editingProject.items.map((i) => (
              <div
                key={i.id}
                className="flex justify-between items-center mb-2"
              >
                <span>
                  {i.name} (${i.price} x {i.quantity})
                </span>
                <button
                  onClick={() => removeItem(i.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded"
                >
                  ❌
                </button>
              </div>
            ))}

            <h3 className="font-semibold mt-4 mb-2">Agregar producto:</h3>
            <div className="flex flex-wrap gap-2">
              {products.map((p) => (
                <button
                  key={p.id}
                  onClick={() => addItem(p)}
                  className="bg-gray-200 px-2 py-1 rounded hover:bg-gray-300"
                >
                  {p.name}
                </button>
              ))}
            </div>

            <div className="mt-6 flex justify-end gap-2">
              <button
                onClick={() => setEditingProject(null)}
                className="bg-gray-500 text-white px-4 py-2 rounded"
              >
                Cancelar
              </button>
              <button
                onClick={handleSave}
                className="bg-blue-600 text-white px-4 py-2 rounded"
              >
                Guardar cambios
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
