import { Paper } from "@mui/material"
import "./UserCard.css"
import Card from "../../assets/card.svg";
const CardUser = ({user}) => {

    return(
        <div className="item">
            <div className="vertical-center">
                <Paper sx={{boxShadow: "none", backgroundColor: "transparent"}}>
                    {user.vote && !user.revealCard &&
                        <img className='card' src={Card} alt="Card"/>
                    }
                    {user.vote && user.revealCard &&
                        <img className='card' src={Card} alt="Card"/>
                    }
                </Paper>
                <p className="nickName">{user.nickName}</p>
            </div>
        </div>
    );
}

export default CardUser;