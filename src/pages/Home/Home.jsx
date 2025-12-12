import "./Home.css";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const { token } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (token) {
            navigate("/dashboard");
        }
    }, [token]);

    const iniciarConGoogle = () => {
        window.location.href = "http://localhost:8080/oauth2/authorization/google?prompt=select_account";
    };

    return (
        <div className="home-container">
            <h1>Carnet Digital</h1>
            <p>Accede a tu carnet estudiantil con tu correo institucional</p>
            <button onClick={iniciarConGoogle}>Iniciar sesión con Google</button>
        </div>
    );
}
