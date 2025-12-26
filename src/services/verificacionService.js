const API_URL = "http://localhost:8080/verificacion";

/** 🔍 Verificación por UUID (QR) */
export async function obtenerVerificacionPorUuid(uuid, token) {
    const res = await fetch(`${API_URL}/${uuid}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        throw new Error("Error al verificar QR");
    }

    return res.json();
}

/** ✍️ Verificación manual (DNI o código) */
export async function obtenerVerificacionManual({ dni, codigo }, token) {
    const params = new URLSearchParams();

    if (dni) params.append("dni", dni);
    if (codigo) params.append("codigo", codigo);

    const res = await fetch(`${API_URL}/manual?${params.toString()}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    });

    if (!res.ok) {
        throw new Error("Error en verificación manual");
    }

    return res.json();
}
