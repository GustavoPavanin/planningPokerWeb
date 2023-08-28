import Header from '../../components/Header/Header';
import '../style.css';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import JoinModal from '../../components/Modal/Actions/JoinRoom';
import CreateRoomModal from '../../components/Modal/Actions/CreateRoom';
import Img from '../../components/Img/Img';

const Home = () => {
	const [openModalJoin, setOpenModalJoin] = useState(false);
	const [openModalCreateRoom, setOpenModalCreateRoom] = useState(false);
    return(
		<>
			<JoinModal isOpen={openModalJoin} setModalOpen={() => setOpenModalJoin(!openModalJoin)} />
			<CreateRoomModal isOpen={openModalCreateRoom} setModalOpen={() => setOpenModalCreateRoom(!openModalCreateRoom)} />
			<Header currentScreen='home' /> 
			<div className="text">
				<div className='boxtexto'>
					<h1>O Planning Poker do nosso jeito e com a nossa cara</h1>
					<h3>Nossas estimativas divertidas, práticas e descomplicadas.</h3>
				</div>
				<div>
					<Img theme="Ilustracao" />
				</div>
			</div>
			<div className='boxbotton'>
				<h1> Crie ou entre em uma sala! </h1>
				<div className='botoes2'>
					<Button theme="btn secondary" label="Entrar em uma sala" onClick={() => setOpenModalJoin(true)}>Entrar em uma sala</Button>
					<Button theme="btn primary" label="Criar uma sala" onClick={() => setOpenModalCreateRoom(true)}>Criar uma sala</Button>
				</div>
			</div>
			
		</>
    );
}

export default Home;