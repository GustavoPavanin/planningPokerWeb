import Header from '../../components/Header/Header';
import '../style.css';
import { CardContent, Grid, Card } from '@mui/material';

const Roon = () => {
	const backgroundColor = {backgroundColor: '#F2F2F2', boxShadow: 'none'};
    return(
		<>
			<Header currentScreen='roon'/> 
			<Grid container alignItems="stretch" > 
				<Grid item component={Card} xs={12} className="item15" style={backgroundColor}>
					<CardContent>Teste</CardContent>
				</Grid>
			</Grid>
			<Grid container alignItems="center" > 
				<Grid item component={Card} xs={12} className="item60" style={backgroundColor}>
					<CardContent>Teste</CardContent>
				</Grid>
				<Grid item component={Card} xs={12} className="item15" style={backgroundColor}>
					<CardContent>Teste</CardContent>
				</Grid>
			</Grid>
		</>
    );
}

export default Roon;