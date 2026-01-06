export default function FiltrosFecha({ onChange }) {

  const handleChange = (e) => {
    onChange(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="admin-filtros">
      <label>Inicio</label>
      <input
        type="datetime-local"
        name="startDate"
        onChange={handleChange}
      />

      <label>Fin</label>
      <input
        type="datetime-local"
        name="endDate"
        onChange={handleChange}
      />

      <button>Filtrar</button>
    </div>
  );
}
