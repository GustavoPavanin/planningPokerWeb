import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import VoteBoard from '../../components/VoteBoard/VoteBoard';
import '../style.css';
import { CardContent, Grid, Card } from '@mui/material';
import ResultBoard from '../../components/ResultBoard/ResultBoard';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSocket } from '../../context/socketContext';

const Room = () => {
	const { socket } = useSocket();
	const [room, setRoom] = useState({name:"", voteSystem: 0, users: []})
	const [selected, setSelected] = useState(0);
	const [viewResults, setViewResults] = useState(false);
	const backgroundColor = {backgroundColor: 'transparent', boxShadow: 'none'};
	const locationInfo = useLocation();
	const roomId = parseInt(locationInfo.pathname.substring(6));
	const nicknameUser = locationInfo.state;
	const navigate = useNavigate()

	window.onload = async () => {
		navigate("/room/" + roomId);
	};

	useEffect(() => {
		updateRoom();
	}, []);

	useEffect(() => {
		console.log(room);
		if(room.result != null){
			setViewResults(room.result.viewResults);
		} else{
			setViewResults(false);
		}
	}, [room]);

	const updateRoom = () =>{
		if(socket){
			socket.subscribe("/topic/response", onJoin);
			socket.send("/app/getRoomInfo", {}, JSON.stringify(roomId)); 
		} else {
			console.log('Cliente STOMP não está conectado.');
		}
	}

	const onJoin = (payload) => {
        const room = JSON.parse(payload.body);
		if(room.id == roomId){
			setRoom(room);
		}
    }

	const handleReveal = () => {
		socket.send("/app/revealResult", {}, JSON.stringify(roomId)); 
		if(viewResults){
			setViewResults(false)
		} else{
			setViewResults(true);
		}
		console.log(room);
	}

	

	const onSelect = (vote) =>{
		setSelected(vote);
		socket.send("/app/vote", {}, JSON.stringify(vote)); 
	}

    return(
		<>
			<Header currentScreen='room' nickname={nicknameUser}/> 
			<Grid container alignItems="stretch" > 
				<Grid item component={Card} xs={12} className="item10" style={backgroundColor}>
					<CardContent className='titulo'>Sala: #{roomId} - {room.name}</CardContent>
				</Grid>
			</Grid>
			<Grid container alignItems="center" > 
				<Grid item component={Card} xs={12} className="item60" style={backgroundColor}>
					<Table users={room.users} handleReveal={handleReveal} viewResults={viewResults}/>
				</Grid>
				<Grid item component={Card} xs={12} className="item20" style={backgroundColor}>
					{!viewResults && <VoteBoard voteType={room.voteSystem} setSelected={onSelect} selected={selected}/>}
					{viewResults && <ResultBoard moda={room.result.moda} media={room.result.media} mediana={room.result.mediana} />}
				</Grid>
			</Grid>
		</>
    );
}

export default Room;