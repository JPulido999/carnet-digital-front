import axios from "axios";

const API_URL_USUARIOS = "http://localhost:8080/api/usuarios";
const API_URL_CARNET = "http://localhost:8080/api/carnet";

// Mantienes tu función actual
export const obtenerUsuarioPorCorreo = async (correo, token) => {
    const res = await axios.get(`${API_URL_USUARIOS}/correo/${correo}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return res.data;
};

// Agregas esta NUEVA función
export const obtenerCarnetMe = async (token) => {
    const res = await axios.get(`${API_URL_CARNET}/me`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return res.data;
};
