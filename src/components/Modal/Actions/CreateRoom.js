import {
  Box,
  FormControl,
  TextField,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";
import Modal from "../Modal";
import Button from "../../Button/Button";

import "../../../index.css";
import { useState } from "react";
import { useSocket } from "../../../context/socketContext";
import { useNavigate } from "react-router-dom";

const CreateRoom = ({ isOpen, setModalOpen }) => {
  const { socket } = useSocket();
  const TextFieldMargin = { "margin-bottom": "24px" };
  const [voteSystem, setVoteSystem] = useState("");
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const onCreateRoom = () => {
    if (socket) {
      socket.subscribe("/topic/roomCreated", redirectToRoom);
      socket.send(
        "/app/createRoom",
        {},
        JSON.stringify({
          name,
          voteSystem,
        })
      );
    } else {
      console.log("Cliente STOMP não está conectado.");
    }
  };

  const redirectToRoom = (payload) => {
    const roomInfo = JSON.parse(payload.body);
    if (roomInfo.name == name) {
      socket.unsubscribe("/topic/roomCreated");
      navigate("/room/" + roomInfo.id);
    }
  };
  return (
    <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
      <Box>
        <h2 className="label">
          Escolha o nome da sala e o sistema de votos para criar sala
        </h2>
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id="systemLabel">Sistema de votos</InputLabel>
          <Select
            labelId="systemLabel"
            id="system"
            value={voteSystem}
            onChange={(event) => setVoteSystem(event.target.value)}
            label="Sistema de votos"
            className="TextField"
            sx={TextFieldMargin}
          >
            <MenuItem value={1}>
              Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, ?)
            </MenuItem>
            <MenuItem value={2}>
              Fibonacci modificado (0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, ?)
            </MenuItem>
            <MenuItem value={3}>
              Inteiros (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ?)
            </MenuItem>
          </Select>
          <TextField
            sx={TextFieldMargin}
            id="roomId"
            label="Nome da sala"
            variant="filled"
            className="TextField"
            onChange={(event) => setName(event.target.value)}
          />
          <Button theme="btn primary xl no-margin" onClick={onCreateRoom}>
            {" "}
            Criar uma sala{" "}
          </Button>
        </FormControl>
      </Box>
    </Modal>
  );
};

export default CreateRoom;
