import './Table.css'
import Button from '../Button/Button';
import CardUser from '../UserCard/UserCard';
import { Grid } from '@mui/material';
import { useLayoutEffect, useState } from 'react';
const Table = ({users}) => {
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
        <Grid container direction="row"  >
            <Grid item xs={4}>
                <div className='usersLeft'>
                    {usersLeft &&<CardUser name={usersLeft} />}
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='usersTop'>
                    {usersTop.map((user) => <CardUser name={user} />)}
                </div>
                <div className="table">
                    
                    <Button theme="primary revelar">Revelar Cartas</Button>
                </div>
                <div className='usersBotton'>
                    {usersBotton.map((user) => <CardUser name={user} />)}
                </div>
            </Grid>
            <Grid item xs={4}>
                <div className='usersRight'>
                    {usersRight &&<CardUser name={usersRight} />}
                </div>
            </Grid> 
        </Grid>

        </>
    );
}

export default Table;