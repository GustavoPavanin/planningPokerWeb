import './Table.css'
import Button from '../Button/Button';
import CardUser from '../UserCard/UserCard';
import { Grid } from '@mui/material';
const Table = ({users, handleReveal, viewResults}) => {
    const getUsers = (resto) =>{
        const returnUsers = [];
        for (let i = 0; i < users.length; i++) {
            
            const user = users[i];
            if(i != 1 && i != 2){
                if(i % 2 == resto){
                    returnUsers.push(user);
                }
            }
        }
        return returnUsers
    }

    const usersTop = getUsers(0);
    const usersRight = users.at(1);
    const usersLeft = users.at(2);
    const usersBotton = getUsers(1);

    
    
    return(
        <>
        <Grid container direction="row" className='users'>
            <Grid item xs={4}>
                <div className='usersLeft'>
                    {usersLeft &&<CardUser user={usersLeft} />}
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='usersTop'>
                    {usersTop.map((user) => <CardUser user={user} />)}
                </div>
                <div className="table">
                    
                    <Button theme="primary revelar" onClick={handleReveal}>{viewResults ?"Começar nova votação" : "Revelar cartas"}</Button>
                </div>
                <div className='usersBotton'>
                    {usersBotton.map((user) => <CardUser user={user} />)}
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='usersRight'>
                    {usersRight &&<CardUser user={usersRight} />}
                </div>
            </Grid> 
        </Grid>

        </>
    );
}

export default Table;