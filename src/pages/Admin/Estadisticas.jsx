export default function Estadisticas({ filtro }) {

  const formatDate = (value) => {
    if (!value) return "—";
    return new Date(value).toLocaleString();
  };

  return (
    <div className="admin-stats-grid">
      <div className="stat-card">
        <span>Total accesos</span>
        <strong>—</strong>
      </div>

      <div className="stat-card">
        <span>Desde</span>
        <strong>{formatDate(filtro.startDate)}</strong>
      </div>

      <div className="stat-card">
        <span>Hasta</span>
        <strong>{formatDate(filtro.endDate)}</strong>
      </div>
    </div>
  );
}
