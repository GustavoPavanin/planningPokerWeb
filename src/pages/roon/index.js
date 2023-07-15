import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import '../style.css';
import { CardContent, Grid, Card } from '@mui/material';

const Roon = ({roonName}) => {
	const backgroundColor = {backgroundColor: '#F2F2F2', boxShadow: 'none'};
	const users = ["Tiri", "Ibas", "Quiqui", "Ana Banuina" ];
	//"Quiqui", "Ibas", "Ana Banana", "Zota", "Teste", "I"
    return(
		<>
			<Header currentScreen='roon' nickname={"teste"}/> 
			<Grid container alignItems="stretch" > 
				<Grid item component={Card} xs={12} className="item10" style={backgroundColor}>
					<CardContent className='titulo'>Sala: {roonName}</CardContent>
				</Grid>
			</Grid>
			<Grid container alignItems="center" > 
				<Grid item component={Card} xs={12} className="item60" style={backgroundColor}>
					<Table users={users}/>
				</Grid>
				<Grid item component={Card} xs={12} className="item20" style={backgroundColor}>
					<CardContent>Teste</CardContent>
				</Grid>
			</Grid>
		</>
    );
}

export default Roon;