import { Box, FormControl, TextField } from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useSocket } from "../../../context/socketContext";

const linkStyle = {
    color :"white", textDecoration: "none", height: "100%",
}

const Join =  ({isOpen, setModalOpen, onlyNick}) => {
    const { socket } = useSocket();
    const TextFieldMargin = {"margin-bottom": "24px"};
    const [roomId, setRoomId] = useState(useLocation().pathname.substring(6));
    const [nickName, setNickName] = useState();
    const navigate = useNavigate()
    
    const joinRoom = () => {

        if(socket){
			socket.send("/app/joinRoom", {}, JSON.stringify({
				nickName, roomId
			})); 
		} else {
			console.log('Cliente STOMP não está conectado.');
		}
        navigate("/room/" + roomId, { state: nickName});
	};

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
            {!onlyNick &&<h2 className="label" >Insira abaixo o ID da sala e seu apelido para entrar</h2>}
            {onlyNick &&<h2 className="label" >Insira seu apelido para continuar</h2>}
                <FormControl sx={{width: "100%"}}>
                    {!onlyNick && <TextField id="roomId" label="ID da sala" variant="filled" className="TextField"  type="number" sx={TextFieldMargin} onChange={(e) => setRoomId(e.target.value)}/>}
                    <TextField id="nickName" label="Seu apelido" variant="filled" className="TextField"  sx={TextFieldMargin} onChange={(e) => setNickName(e.target.value)}/>
                    <Button theme="btn primary" onClick={joinRoom}> Entrar na Sala </Button>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default Join;