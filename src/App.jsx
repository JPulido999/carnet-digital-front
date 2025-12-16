import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import VerificacionUsuario from "./pages/Verification/VerificacionUsuario.jsx";
import RutaProtegida from "./components/RutaProtegida";

export default function App() {
    const { token } = useContext(AuthContext);

    console.log("TOKEN ACTUAL:", token);

    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                {/* RUTA PROTEGIDA */}
                <Route
                    path="/dashboard"
                    element={
                        <RutaProtegida roles={["ADMIN", "ESTUDIANTE", "VIGILANTE"]}>
                            <Dashboard />
                        </RutaProtegida>
                    }
                />

                {/* VERIFICACIÓN SIN LOGIN */}
                <Route
                    path="/verificacion/:dni"
                    element={
                        <RutaProtegida roles={["VIGILANTE"]}>
                            <VerificacionUsuario />
                        </RutaProtegida>
                    }
                />

                <Route path="/error" element={<ErrorPage />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    );
}
