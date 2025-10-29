import React from "react";
import CreateProject from "../components/CreateProject";

export default function CreateProjectPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">Crear Proyecto</h1>
      <CreateProject />
    </div>
  );
}
