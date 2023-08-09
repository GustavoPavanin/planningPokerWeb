import { useEffect, useState } from 'react';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import VoteBoard from '../../components/VoteBoard/VoteBoard';
import '../style.css';
import { CardContent, Grid, Card } from '@mui/material';
import ResultBoard from '../../components/ResultBoard/ResultBoard';
import { useLocation } from 'react-router-dom';
import { useSocket } from '../../context/socketContext';

const Room = () => {
	const { socket } = useSocket();
	const [room, setRoom] = useState({name:"", voteSystem: 0, users: []})
	const [selected, setSelected] = useState();
	const [viewResults, setViewResults] = useState(false);
	const backgroundColor = {backgroundColor: 'transparent', boxShadow: 'none'};
	const locationInfo = useLocation();
	const roomId = parseInt(locationInfo.pathname.substring(6));

	useEffect(() => {
		updateRoom();
		return () => {
			socket.unsubscribe("/topic/response");
        }
	}, []);

	const updateRoom = () =>{
		if(socket){
			socket.subscribe("/topic/response", onJoin);
			socket.send("/app/getRoomInfo", {}, JSON.stringify(roomId)); 
		} else {
			console.log('Cliente STOMP não está conectado.');
		}

		
	}
	const onJoin = (payload) => {
		console.log("teste1");
        const room = JSON.parse(payload.body);
		if(room.id == roomId){
			setRoom(room);
		}
    }

	const handleReveal = () => {
		console.log(JSON.stringify(room));
		// setViewResults(!viewResults);
	}

	window.onbeforeunload = function(e) {
		console.log("uau");
	};

    return(
		<>
			<Header currentScreen='room' nickname={locationInfo.state}/> 
			<Grid container alignItems="stretch" > 
				<Grid item component={Card} xs={12} className="item10" style={backgroundColor}>
					<CardContent className='titulo'>Sala: {room.name}</CardContent>
				</Grid>
			</Grid>
			<Grid container alignItems="center" > 
				<Grid item component={Card} xs={12} className="item60" style={backgroundColor}>
					<Table users={room.users} handleReveal={handleReveal} viewResults={viewResults}/>
				</Grid>
				<Grid item component={Card} xs={12} className="item20" style={backgroundColor}>
					{!viewResults && <VoteBoard voteType={room.voteSystem} setSelected={setSelected} selected={selected}/>}
					{viewResults && <ResultBoard moda={1} media={2} mediana={3} />}
				</Grid>
			</Grid>
		</>
    );
}

export default Room;