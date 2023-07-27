import { Box, FormControl, TextField, Select, InputLabel, MenuItem} from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";
import { useEffect, useState } from "react";
import WebSocketService2 from "../../../service/webSocketService2";

const CreateRoom =  ({isOpen, setModalOpen}) => {
    
    const TextFieldMargin = {"margin-bottom": "24px"};
    const [voteSystem, setVoteSystem] = useState('');
    const [name, setName] = useState('');
    const [room, setRoom] = useState({
        id: null,
        name: "",
        voteSystem: 0,
        users: [],
        activities: [],
    });

    const createRoom = () => {
        const roomInfo = { name, voteSystem };
        WebSocketService2().createRoom(roomInfo);
            // .then((roomId) => {
            // history.pushState(`/room/${roomId}`)
            // }
    }

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
                <h2 className="label" >Escolha o nome da sala e o sistema de votos para criar sala</h2>
                <FormControl sx={{width: "100%"}}>
                <InputLabel id="systemLabel">Sistema de votos</InputLabel>
                        <Select labelId="systemLabel" id="system" value={voteSystem} onChange={(event) => setVoteSystem(event.target.value)} label="Sistema de votos" className="TextField" sx={TextFieldMargin}>
                            <MenuItem value={1}>Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, ?)</MenuItem>
                            <MenuItem value={2}>Fibonacci modificado (0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, ?)</MenuItem>
                            <MenuItem value={3}>Inteiros (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ?)</MenuItem>
                        </Select>
                    <TextField id="roomId" label="Nome da sala" variant="filled" className="TextField" onChange={(event) => setName(event.target.value)} sx={TextFieldMargin}/>
                    <Button theme="btn primary" onClick={createRoom}> Criar uma sala </Button>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default CreateRoom;