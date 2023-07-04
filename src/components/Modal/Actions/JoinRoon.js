import { Box, FormControl, TextField } from "@mui/material";
import Modal from "../Modal"
import Button from "../../Button/Button";
import "../../../index.css";


const Join =  ({isOpen, setModalOpen}) => {
    const TextFieldMargin = {"margin-bottom": "24px"};

    return(
        <Modal isOpen={isOpen} setModalOpen={setModalOpen}>
            <Box >
                <h2 className="label" >Insira abaixo o ID da sala e seu apelido para entrar</h2>
                <FormControl sx={{width: "100%"}}>
                    <TextField id="roonId" label="ID da sala" variant="filled" className="TextField"  sx={TextFieldMargin}/>
                    <TextField id="nickName" label="Seu apelido" variant="filled" className="TextField" sx={TextFieldMargin}/>
                    <Button theme="btn primary" label="Entrar na Sala" onClick={setModalOpen}/>
                </FormControl>
            </Box>
        </Modal>
    );
}

export default Join;