import URL from "../config";

export const fetchRooms = async () => {
  try {
    const response = await fetch(`${URL}/hall`, {
      method: "GET",
      credentials: "omit",
    });
    if (!response.ok) {
      throw new Error(`Erro na requisição: ${response.status}`);
    }
    const rooms = await response.json();
    return rooms;
  } catch (error) {
    console.error("Erro ao buscar as salas:", error);
    throw error;
  }
};
