import { Box, FormControl, TextField, Select, InputLabel, MenuItem} from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";
import { useState } from "react";


const CreateRoon =  ({isOpen, setModalOpen}) => {
    const TextFieldMargin = {"margin-bottom": "24px"};
    const [age, setAge] = useState('');
    const handleChange = (event) => {
      setAge(event.target.value);
    };

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
                <h2 className="label" >Escolha o nome da sala e o sistema de votos para criar sala</h2>
                <FormControl sx={{width: "100%"}}>
                <InputLabel id="systemLabel">Sistema de votos</InputLabel>
                        <Select labelId="systemLabel" id="system" value={age} onChange={handleChange} label="Sistema de votos" className="TextField" sx={TextFieldMargin}>
                            <MenuItem value=""> <em></em> </MenuItem>
                            <MenuItem value={1}>Fibonacci (0, 1, 2, 3, 5, 8, 13, 21, 34, ?)</MenuItem>
                            <MenuItem value={2}>Fibonacci modificado (0, 1/2, 1, 2, 3, 5, 8, 13, 20, 40, ?)</MenuItem>
                            <MenuItem value={3}>Inteiros (0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, ?)</MenuItem>
                        </Select>
                    <TextField id="roonId" label="Nome da sala" variant="filled" className="TextField"  sx={TextFieldMargin}/>
                    <Button theme="btn primary" onClick={setModalOpen}> Criar uma sala </Button>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default CreateRoon;