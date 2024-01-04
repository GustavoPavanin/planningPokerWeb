import { Box, Card, CardActions, CardContent, Typography } from "@mui/material";
import "./RoomCard.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Img from "../Img/Img";

const RoomCard = ({ id, name, qtUsers }) => {
  const navigate = useNavigate();
  return (
    <Box sx={{ padding: 2 }}>
      <Card
        sx={{
          width: "10rem",
          height: "10rem",
          border: 3,
          borderRadius: 4,
          borderColor: "#AFAFFF",
          background: "#F2F2F2",
          padding: "8px",
          "&:hover": {
            backgroundColor: "#E6E6FF",
          },
          "&:active": {
            backgroundColor: "#CCCCFF",
          },
          alignItems: "center",
          justifyContent: "center",
          display: "inline-flex",
        }}
        onClick={() => navigate("/room/" + id)}
      >
        <CardContent sx={{ textAlign: "center" }}>
          <h3>{name}</h3>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Img theme="Person" />
            <label style={{ fontWeight: "bold", paddingLeft: 5 }}>
              {qtUsers}
            </label>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RoomCard;
