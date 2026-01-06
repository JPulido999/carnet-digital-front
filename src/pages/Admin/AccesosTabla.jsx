import { useEffect, useState } from "react";
import { obtenerTransacciones } from "../../services/zktecoService";

export default function AccesosTabla({ filtro }) {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);

  useEffect(() => {
    obtenerTransacciones({
      ...filtro,
      page,
      size: 20
    }).then(setData);
  }, [filtro, page]);

  if (!data) {
    return <p>Cargando accesos desde ZKTeco...</p>;
  }

  if (data.content.length === 0) {
    return <p>No hay registros para el rango seleccionado.</p>;
  }

  return (
    <div className="admin-table-container">
      <table className="admin-table">
        <thead>
          <tr>
            <th>Persona</th>
            <th>Departamento</th>
            <th>Puerta</th>
            <th>Lector</th>
            <th>Evento</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {data.content.map(row => (
            <tr key={row.id}>
              <td>{row.personName}</td>
              <td>{row.departmentName}</td>
              <td>{row.devAlias}</td>
              <td>{row.readerName}</td>
              <td>{row.eventName}</td>
              <td>{new Date(row.eventTime).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="admin-pagination">
        <button disabled={data.first} onClick={() => setPage(p => p - 1)}>
          ◀ Anterior
        </button>
        <button disabled={data.last} onClick={() => setPage(p => p + 1)}>
          Siguiente ▶
        </button>
      </div>
    </div>
  );
}
