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
            <img className="logo-unsch-principal" src="http://localhost:8080/control_ph/logounsch1.png" alt="" />
            <h1>Carnet Digital UNSCH</h1>
            <button onClick={iniciarConGoogle}>Iniciar sesión con Google</button>
            <p>Accede a tu carnet estudiantil con tu correo institucional</p>
        </div>
    );
}
