import { Box, Paper } from "@mui/material";
import "./UserCard.css";

import VoteCardLabel from "../VoteCard/VoteCardLabel";
import Img from "../Img/Img";
const CardUser = ({ user, viewResults }) => {
  const changeVote = (vote) => {
    console.log(vote);
    if (vote == -1) {
      return "?";
    } else if (vote == 0.5) {
      return "1/2";
    } else {
      return vote;
    }
  };

  return (
    <div className="item">
      <Paper sx={{ boxShadow: "none", backgroundColor: "transparent" }}>
        {user.vote && !viewResults && <Img theme="Card" />}
        {user.vote && viewResults && (
          <VoteCardLabel
            className="card"
            vote={changeVote(user.vote)}
            disabled={true}
          />
        )}
      </Paper>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        {user.owner && <Img theme="Owner" />}
        <label style={{ fontWeight: "bold", paddingLeft: 5 }}>
          {user.userName}
        </label>
      </Box>
    </div>
  );
};

export default CardUser;
