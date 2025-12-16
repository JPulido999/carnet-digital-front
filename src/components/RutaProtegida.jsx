import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function RutaProtegida({ children, roles }) {
    const { token, usuario } = useContext(AuthContext);

    if (!token) return <Navigate to="/" replace />;

    // Si la ruta requiere roles específicos
    if (roles && usuario) {
        if (!roles.includes(usuario.rol)) {
            return <Navigate to="/error" replace />;
        }
    }

    return children;
}
