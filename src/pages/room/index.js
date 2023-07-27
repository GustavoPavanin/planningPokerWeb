import { useState } from 'react';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import VoteBoard from '../../components/VoteBoard/VoteBoard';
import '../style.css';
import { CardContent, Grid, Card } from '@mui/material';
import ResultBoard from '../../components/ResultBoard/ResultBoard';

const Room = ({roomName}) => {
	const [selected, setSelected] = useState();
	const [viewResults, setViewResults] = useState(false);
	const backgroundColor = {backgroundColor: 'transparent', boxShadow: 'none'};
	const users = [{nickName:"Tiri", vote: 8}, {nickName:"Ibas", vote: 8}, {nickName:"Quiqui",vote: 8}, {nickName:"Ana Banuina", vote: 8} ];
	const voteType = 1;

	const handleReveal = () => {
		setViewResults(!viewResults);
	}	
    return(
		<>
			<Header currentScreen='room' nickname={"teste"}/> 
			<Grid container alignItems="stretch" > 
				<Grid item component={Card} xs={12} className="item10" style={backgroundColor}>
					<CardContent className='titulo'>Sala: {roomName}{selected}</CardContent>
				</Grid>
			</Grid>
			<Grid container alignItems="center" > 
				<Grid item component={Card} xs={12} className="item60" style={backgroundColor}>
					<Table users={users} handleReveal={handleReveal} viewResults={viewResults}/>
				</Grid>
				<Grid item component={Card} xs={12} className="item20" style={backgroundColor}>
					{!viewResults && <VoteBoard voteType={voteType} setSelected={setSelected} selected={selected}/>}
					{viewResults && <ResultBoard moda={1} media={2} mediana={3} />}
				</Grid>
			</Grid>
		</>
    );
}

export default Room;