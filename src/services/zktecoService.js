import api from "./api";

export const obtenerTransacciones = async ({
  startDate,
  endDate,
  page = 0,
  size = 20
}) => {
  const res = await api.get("/api/transactions", {
    params: { startDate, endDate, page, size }
  });
  return res.data;
};
