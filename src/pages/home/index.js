import Header from '../../components/Header/Header';
import './style.css';
import ilustracao from '../../assets/Ilustração.svg';
import Button from '../../components/Button/Button';
import { useState } from 'react';
import JoinModal from '../../components/Modal/Actions/JoinRoon';
import CreateRoonModal from '../../components/Modal/Actions/CreateRoon';

const Home = () => {
	const [openModalJoin, setOpenModalJoin] = useState(false);
	const [openModalCreateRoon, setOpenModalCreateRoon] = useState(false);

    return(
		<>
			<Header /> 
			<div className="text">
				<div className='boxtexto'>
					<h1>O Planning Poker do nosso jeito e com a nossa cara</h1>
					<h3>Nossas estimativas divertidas, práticas e descomplicadas.</h3>
				</div>
				<div>
					<img className="ilustracao" src={ilustracao} />
				</div>
			</div>
			<div className='boxbotton'>
				<h1> Crie ou entre em uma sala! </h1>
				<div className='botoes2'>
					<Button theme="btn secondary" label="Entrar em uma sala" onClick={() => setOpenModalJoin(true)}/>
					<Button theme="btn primary" label="Criar uma sala"onClick={() => setOpenModalCreateRoon(true)} />
				</div>
			</div>
			<JoinModal isOpen={openModalJoin} setModalOpen={() => setOpenModalJoin(!openModalJoin)} />
			<CreateRoonModal isOpen={openModalCreateRoon} setModalOpen={() => setOpenModalCreateRoon(!openModalCreateRoon)} />
		</>
    );
}

export default Home;