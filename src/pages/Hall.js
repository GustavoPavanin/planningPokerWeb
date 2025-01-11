import { useState } from "react";
import { Grid } from "@mui/material";
import { useEffect } from "react";
import RoomCard from "../components/RoomCard/RoomCard";
import Header from "../components/Header/Header";
import "../index.css";
import EmptyHall from "../components/ViewMessages/EmptyHall";
import { fetchRooms } from "../service/roomService";
const Hall = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadRooms = async () => {
      try {
        const roomsData = await fetchRooms();
        setRooms(roomsData); // Atualiza o estado com a lista de salas
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    loadRooms();
  }, []);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }
  return (
    <>
      <Header currentScreen="hall" />
      {rooms.length > 0 && (
        <Grid
          container
          spacing={2}
          sx={{ padding: "1rem" }}
          justifyContent="center"
        >
          {rooms.map((room) => (
            <RoomCard id={room.id} name={room.name} />
          ))}
        </Grid>
      )}
      {rooms.length == 0 && <EmptyHall error="emptyHall" />}
    </>
  );
};

export default Hall;
