
import ReactModal from 'react-modal';
import "./Modal.css";
import { ThemeProvider, createTheme } from '@mui/material';

const Modal = ({isOpen, setModalOpen, children}) => {

  const theme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
            '&.Mui-focused': {
              borderColor: 'purple', // Cor da borda quando focada
          },
        },
      },
      MuiFilledInput: {
        styleOverrides: {
          underline: {
            '&:after': {
              borderBottomColor: '#5C5CFF', // Cor da linha de baixo após interação
            },
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            color: '#2C2C2C', // Cor do rótulo
            '&.Mui-focused': {
              color: '#5C5CFF', // Cor do rótulo quando selecionado
            },
          },
        },
      },
    },
  });

    return(
      <ThemeProvider theme={theme}>
        <ReactModal
        isOpen={isOpen}
        onRequestClose={setModalOpen}
        overlayClassName="modal-overlay"
        className="modal-content"
        shouldCloseOnOverlayClick={true}>
          {children}
        </ReactModal>
      </ThemeProvider>
    );

}

export default Modal;