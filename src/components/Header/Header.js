import {useState} from 'react';
import './Header.css';
import Logo from '../../assets/logo.svg';
import Button from '../Button/Button';
import JoinModal from '../Modal/Actions/JoinRoon';
import CreateRoonModal from '../Modal/Actions/CreateRoon';
const Header = () => {
  const [openModalJoin, setOpenModalJoin] = useState(false);
	const [openModalCreateRoon, setOpenModalCreateRoon] = useState(false);

  return (
    <div className='header'>
      <img className='logo' src={Logo} alt="All.in logo"/>
      <div className='botoes'>
        <Button theme="btn secondary" label="Entrar em uma sala" onClick={() => setOpenModalJoin(true)}/>
        <Button theme="btn primary" label="Criar uma sala" onClick={() => setOpenModalCreateRoon(true)}/>
      </div>
      <JoinModal isOpen={openModalJoin} setModalOpen={() => setOpenModalJoin(!openModalJoin)} />
			<CreateRoonModal isOpen={openModalCreateRoon} setModalOpen={() => setOpenModalCreateRoon(!openModalCreateRoon)} />
    </div>
    
  );
}

export default Header;