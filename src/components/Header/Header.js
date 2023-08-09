import {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import JoinModal from '../Modal/Actions/JoinRoom';
import CreateRoomModal from '../Modal/Actions/CreateRoom';
import { Menu, MenuItem, Snackbar } from '@mui/material';
import { Link } from 'react-router-dom';
const Header = ({currentScreen, nickname}) => {
  const [openModalJoin, setOpenModalJoin] = useState(false);
	const [openModalCreateRoom, setOpenModalCreateRoom] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  const copyURL = () => {
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
            <Button theme="primary" onClick={() => setOpenModalCreateRoom(true)}>Criar uma sala</Button>
        </div>
      )}
      {currentScreen === 'room' && (
        <div className='botoes'>
          <p className='nickname' onClick={handleClickMenu}>{nickname} ˅</p>
            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
              <MenuItem onClick={handleCloseMenu}><Link to="/">Sair da sala</Link></MenuItem>
            </Menu>
          <Button theme="primary"  copy='true' onClick={copyURL}>Copiar link da sala</Button>
        </div>
      )}
      <JoinModal isOpen={openModalJoin} setModalOpen={() => setOpenModalJoin(!openModalJoin)} />
			<CreateRoomModal isOpen={openModalCreateRoom} setModalOpen={() => setOpenModalCreateRoom(!openModalCreateRoom)} />
    </div>
    <Snackbar open={openSnackBar} autoHideDuration={2000} onClose={handleClose} message="Link copiado com sucesso!" />
    </>
  );
}

export default Header;