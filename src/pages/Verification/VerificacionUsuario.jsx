import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerVerificacionPorDni } from "../../services/verificacionService.js";



export default function VerificacionUsuario() {
    const { dni } = useParams();
    const [info, setInfo] = useState(null);

    useEffect(() => {
        obtenerVerificacionPorDni(dni).then(setInfo);
    }, [dni]);

    if (!info) return <p>Cargando...</p>;

    return (
        <div>
            <h2>Verificación de identidad</h2>
            <img 
                src={`http://localhost:8080/control_ph/${info.fotoCarnetUrl}`} 
                alt="Foto"
                style={{ width: 120, height: 150 }}
            />
            <p><strong>DNI:</strong> {info.dni}</p>
            <p><strong>Nombres:</strong> {info.nombres}</p>
            <p><strong>Código Est:</strong> {info.codigoEstudiante}</p>
            <p><strong>Escuela:</strong> {info.escuela}</p>
        </div>
    );
}
