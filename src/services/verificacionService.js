export async function obtenerVerificacionPorDni(dni) {
    try {
        const response = await fetch(`http://localhost:3000/api/verificacion/${dni}`);
        if (!response.ok) throw new Error("Error al obtener verificación");

        return await response.json();
    } catch (error) {
        console.error("Error en obtenerVerificacionPorDni:", error);
        return null;
    }
}
