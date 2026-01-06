import { useState } from "react";
import Estadisticas from "./Estadisticas";
import AccesosTabla from "./AccesosTabla";
import FiltrosFecha from "./FiltrosFecha";

import "./AdminDashboard.css";

export default function AdminDashboard() {
  const [filtro, setFiltro] = useState({
    startDate: "2025-07-25T00:00:00",
    endDate: "2025-07-25T23:59:59"
  });

  return (
    <div className="admin-dashboard-container">
      <h1 className="admin-title">Panel de Administración – ZKTeco</h1>

      <FiltrosFecha onChange={setFiltro} />

      <Estadisticas filtro={filtro} />

      <AccesosTabla filtro={filtro} />
    </div>
  );
}
