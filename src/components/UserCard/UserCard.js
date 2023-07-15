import { Paper } from "@mui/material"
import "./UserCard.css"
const CardUser = ({vote, name}) => {
    return(
        <>
        <Paper variant="outlined" className="item"> {name}</Paper>
        </>
    );
}

export default CardUser;