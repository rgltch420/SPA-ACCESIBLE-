import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getBudgets, createBudget } from "../firebase/budgetApi";

export default function ProjectView() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({ id, name: "", items: [] });
  const [loading, setLoading] = useState(true);

  // Cargar proyecto desde backend
  useEffect(() => {
    const loadProject = async () => {
      try {
        const budgets = await getBudgets();
        const proj = budgets.find((b) => b.id === id || b.id === parseInt(id));
        if (proj) setProject(proj);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    loadProject();
  }, [id]);

  // Guardado automático (crea o actualiza)
  const saveProject = async (updatedProject) => {
    try {
      // Si el proyecto tiene id de backend, actualizar (PUT o POST según tu API)
      // Por ahora usamos createBudget para simplificar
      const saved = await createBudget(updatedProject);
      setProject(saved);
    } catch (err) {
      console.error("Error guardando proyecto:", err);
    }
  };

  const addItem = () => {
    const newItem = {
      desc: "",
      cost: 0,
      id: project.items.length ? project.items[project.items.length - 1].id + 1 : 1,
    };
    const updated = { ...project, items: [...project.items, newItem] };
    setProject(updated);
    saveProject(updated);
  };

  const updateItem = (itemId, key, value) => {
    const updated = {
      ...project,
      items: project.items.map((item) =>
        item.id === itemId ? { ...item, [key]: key === "cost" ? Number(value) : value } : item
      ),
    };
    setProject(updated);
    saveProject(updated);
  };

  const deleteItem = (itemId) => {
    const updated = {
      ...project,
      items: project.items.filter((item) => item.id !== itemId),
    };
    setProject(updated);
    saveProject(updated);
  };

  const updateName = (value) => {
    const updated = { ...project, name: value };
    setProject(updated);
    saveProject(updated);
  };

  const totalBudget = project.items.reduce((acc, i) => acc + Number(i.cost || 0), 0);

  if (loading) return <p className="p-6">Cargando proyecto...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          value={project.name}
          onChange={(e) => updateName(e.target.value)}
          placeholder="Nombre del proyecto"
          className="text-2xl font-bold border-b px-2 py-1"
        />
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-red-500 px-3 py-1 text-white rounded hover:bg-red-600"
        >
          Salir
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-4">Presupuesto total: ${totalBudget}</h2>

      <div className="mb-6">
        <button
          onClick={addItem}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Agregar partida
        </button>
      </div>

      <div>
        {project.items.length === 0 ? (
          <p className="text-gray-500">No hay partidas aún.</p>
        ) : (
          <ul className="space-y-2">
            {project.items.map((item) => (
              <li
                key={item.id}
                className="flex gap-2 items-center bg-white p-2 rounded shadow"
              >
                <input
                  type="text"
                  value={item.desc}
                  onChange={(e) => updateItem(item.id, "desc", e.target.value)}
                  placeholder="Descripción"
                  className="border px-2 py-1 flex-1 rounded"
                />
                <input
                  type="number"
                  value={item.cost}
                  onChange={(e) => updateItem(item.id, "cost", e.target.value)}
                  placeholder="Costo"
                  className="border px-2 py-1 w-24 rounded"
                />
                <button
                  onClick={() => deleteItem(item.id)}
                  className="bg-red-500 text-white px-2 py-0.5 rounded hover:bg-red-600"
                >
                  Borrar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
