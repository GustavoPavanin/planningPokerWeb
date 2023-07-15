import {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import JoinModal from '../Modal/Actions/JoinRoon';
import CreateRoonModal from '../Modal/Actions/CreateRoon';
import { Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = ({currentScreen, nickname}) => {
  const [openModalJoin, setOpenModalJoin] = useState(false);
	const [openModalCreateRoon, setOpenModalCreateRoon] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose = (event) => {
    setOpenSnackBar(false);
  };

  const copyURL = (newState) => {
    navigator.clipboard.writeText(window.location);
    handleClick();
  }
  return (
    <>
    <div className='header'>
      <Link to="/"><img className='logo' src={Logo} alt="All.in logo"/></Link>
      {currentScreen === 'home' && (
        <div className='botoes'>
            <Button theme="secondary"  onClick={() => setOpenModalJoin(true)}>Entrar em uma sala</Button>
            <Button theme="primary" onClick={() => setOpenModalCreateRoon(true)}>Criar uma sala</Button>
        </div>
      )}
      {currentScreen === 'roon' && (
        <div className='botoes'>
          <p className='nickname'>{nickname}</p>
          <Button theme="primary"  copy='true' onClick={copyURL}>Copiar link da sala</Button>
        </div>
      )}
      <JoinModal isOpen={openModalJoin} setModalOpen={() => setOpenModalJoin(!openModalJoin)} />
			<CreateRoonModal isOpen={openModalCreateRoon} setModalOpen={() => setOpenModalCreateRoon(!openModalCreateRoon)} />
    </div>
    <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleClose} message="Link copiado com sucesso!" />
    </>
  );
}

export default Header;