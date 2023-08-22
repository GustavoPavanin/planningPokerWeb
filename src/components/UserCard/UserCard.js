import { Paper } from "@mui/material"
import "./UserCard.css"
import Card from "../../assets/card.svg";
import VoteCardLabel from "../VoteCard/VoteCardLabel";
const CardUser = ({user, viewResults}) => {

    const changeVote = (vote) => {
        console.log(vote);
        if(vote == -1){
            return "?";
        } else if(vote == 0.5){
            return "1/2";
        } else{
            return vote;
        }
    }

    return(
        <div className="item">
                <Paper sx={{boxShadow: "none", backgroundColor: "transparent"}}>
                    {user.vote && !viewResults &&
                        <img className='card' src={Card} alt="Card"/>
                    }
                    {user.vote && viewResults &&
                        <VoteCardLabel  className='card' vote={changeVote(user.vote)} disabled={true} />
                    }
                </Paper>
                <p className="nickName">{user.userName}</p>
        </div>
    );
}

export default CardUser;