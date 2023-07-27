import { Box, FormControl, TextField } from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const linkStyle = {
    color :"white", textDecoration: "none", height: "100%",
}

const Join =  ({isOpen, setModalOpen}) => {
    const TextFieldMargin = {"margin-bottom": "24px"};
    const [roomId, setRoomId] = useState();
    const [nickName, setNickName] = useState();

    const handleRoom = (id) => {
        setRoomId(id);
    }
    const handleNickName = (nick) => {
        setNickName(nick);
        console.log(nickName);
    }

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
                <h2 className="label" >Insira abaixo o ID da sala e seu apelido para entrar</h2>
                <FormControl sx={{width: "100%"}}>
                    <TextField id="roomId" label="ID da sala" variant="filled" className="TextField"  sx={TextFieldMargin} onChange={(e) => handleRoom(e.target.value)}/>
                    <TextField id="nickName" label="Seu apelido" variant="filled" className="TextField" sx={TextFieldMargin} onChange={(e) => handleNickName(e.target.value)}/>
                    <Link to="/room" style={linkStyle}><Button theme="primary xl no-margin">Entrar na Sala</Button> </Link> 
                </FormControl>
            </Box>
        </Modal>
    );
}

export default Join;