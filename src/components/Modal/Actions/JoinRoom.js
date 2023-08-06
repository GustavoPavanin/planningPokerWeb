import { Box, FormControl, TextField } from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSocket } from "../../../context/socketContext";

const linkStyle = {
    color :"white", textDecoration: "none", height: "100%",
}

const Join =  ({isOpen, setModalOpen}) => {
    const { socket } = useSocket();
    const TextFieldMargin = {"margin-bottom": "24px"};
    const [roomId, setRoomId] = useState(0);
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
        navigate("/room/" + roomId, { state: nickName})
	};
    
    const redirectToRoom = () =>{
    }

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
                <h2 className="label" >Insira abaixo o ID da sala e seu apelido para entrar</h2>
                <FormControl sx={{width: "100%"}}>
                    <TextField id="roomId" label="ID da sala" variant="filled" className="TextField"  type="number" sx={TextFieldMargin} onChange={(e) => setRoomId(e.target.value)}/>
                    <TextField id="nickName" label="Seu apelido" variant="filled" className="TextField"  sx={TextFieldMargin} onChange={(e) => setNickName(e.target.value)}/>
                    {/* <Link to="/room" style={linkStyle}><Button theme="primary xl no-margin">Entrar na Sala</Button> </Link>  */}
                    <Button theme="btn primary" onClick={joinRoom}> Entrar na Sala </Button>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default Join;