import { Box, Card, CardActions, CardContent } from "@mui/material";
import "./RoomCard.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ id, name }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 2 }}>
      <Card
        sx={{
          width: "10.5rem",
          height: "10rem",
          border: 1,
          borderColor: "gray",
          padding: "8px",
        }}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <h3>{name}</h3>
        </CardContent>
        <CardActions
          sx={{
            padding: "0px",
            width: "95%",
          }}
        >
          <Button theme="primary xl" onClick={() => navigate("/room/" + id)}>
            Entrar
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default RoomCard;
