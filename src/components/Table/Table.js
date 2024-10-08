import "./Table.css";
import Button from "../Button/Button";
import CardUser from "../UserCard/UserCard";
import { Grid } from "@mui/material";
const Table = ({ myUserId, users, handleReveal, viewResults }) => {
  const getUsers = (resto) => {
    const returnUsers = [];
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (i != 1 && i != 2) {
        if (i % 2 == resto) {
          returnUsers.push(user);
        }
      }
    }
    return returnUsers;
  };
  const hasSomeVote = () => {
    for (let i = 0; i < users.length; i++) {
      const user = users[i];
      if (user.vote != "null" && user.vote != null) {
        return true;
      }
    }
    return false;
  };

  const myUser = users.at(users.findIndex((user) => user.id == myUserId));
  const someVote = hasSomeVote();
  const revealButton = someVote || viewResults;
  const usersTop = getUsers(0);
  const usersRight = users.at(1);
  const usersLeft = users.at(2);
  const usersBotton = getUsers(1);

  return (
    <>
      <Grid container direction="row" className="users">
        <Grid item xs={4}>
          <div className="usersLeft">
            {usersLeft && (
              <CardUser user={usersLeft} viewResults={viewResults} />
            )}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="usersTop">
            {usersTop.map((user) => (
              <CardUser user={user} viewResults={viewResults} />
            ))}
          </div>
          <div className="table">
            {myUser.owner && revealButton && (
              <Button theme="primary revelar" onClick={handleReveal}>
                {viewResults ? "Começar nova votação" : "Revelar cartas"}
              </Button>
            )}
          </div>
          <div className="usersBotton">
            {usersBotton.map((user) => (
              <CardUser user={user} viewResults={viewResults} />
            ))}
          </div>
        </Grid>
        <Grid item xs={4}>
          <div className="usersRight">
            {usersRight && (
              <CardUser user={usersRight} viewResults={viewResults} />
            )}
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Table;
