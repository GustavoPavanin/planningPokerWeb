import React, { useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import CreateRoom from "../Modal/Actions/CreateRoom";
import Button from "../Button/Button";
const EmptyHall = () => {
  const [openModalCreateRoom, setOpenModalCreateRoom] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="centered">
      <h1
        style={{
          width: "400px",
          textAlign: "center",
          paddingBottom: "1px",
        }}
      >
        Ops, ainda não tem nenhuma sala por aqui
      </h1>
      <h3>Clique no botão abaixo e seja o primeiro a criar uma.</h3>
      <Button
        theme="btn primary"
        label="Criar uma sala"
        onClick={() => setOpenModalCreateRoom(true)}
      >
        Criar uma sala
      </Button>
      <CreateRoom
        isOpen={openModalCreateRoom}
        setModalOpen={() => setOpenModalCreateRoom(!openModalCreateRoom)}
      />
    </div>
  );
};

export default EmptyHall;
