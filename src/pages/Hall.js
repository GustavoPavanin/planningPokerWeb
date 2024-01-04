import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { useEffect } from "react";
import { useSocket } from "../context/socketContext";
import RoomCard from "../components/RoomCard/RoomCard";
import Header from "../components/Header/Header";
import "../index.css";
import EmptyHall from "../components/ViewMessages/EmptyHall";
const Hall = () => {
  const { socket } = useSocket();
  const [rooms, setRooms] = useState([]);

  window.onload = async () => {
    updateRoom();
  };

  useEffect(() => {
    updateRoom();
  }, []);

  const updateRoom = () => {
    if (socket) {
      socket.subscribe("/topic/getRoomForHall", onResponse);
      socket.send("/app/getRoomForHall", {}, {});
    } else {
      console.log("Cliente STOMP não está conectado.");
    }
  };

  const onResponse = (payload) => {
    const body = JSON.parse(payload.body);
    console.log(body);

    setRooms(body);
  };

  const onCreateRoom = (payload) => {
    const room = JSON.parse(payload.body);
    setRooms((rooms) => [...rooms, room]);
  };

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
            <RoomCard id={room.id} name={room.name} qtUsers={room.qtUsers} />
          ))}
        </Grid>
      )}
      {rooms.length == 0 && <EmptyHall error="emptyHall" />}
    </>
  );
};

export default Hall;
