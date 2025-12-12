import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);
    const [usuario, setUsuario] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tokenParam = urlParams.get("token");

        if (tokenParam) {
            localStorage.setItem("token", tokenParam);
            setToken(tokenParam);

            // Extraer email del token
            const payload = JSON.parse(atob(tokenParam.split('.')[1]));
            setUsuario({ correo: payload.sub });

            window.history.replaceState({}, document.title, "/");
        } else {
            const storedToken = localStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
                const payload = JSON.parse(atob(storedToken.split('.')[1]));
                setUsuario({ correo: payload.sub });
            }
        }
    }, []);

    const login = (newToken) => {
        localStorage.setItem("token", newToken);
        setToken(newToken);
        const payload = JSON.parse(atob(newToken.split('.')[1]));
        setUsuario({ correo: payload.sub });
    };

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUsuario(null);
    };

    return (
        <AuthContext.Provider value={{ token, usuario, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
