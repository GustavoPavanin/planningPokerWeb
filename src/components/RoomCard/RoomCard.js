import { Box, Card, CardContent, Typography } from "@mui/material";
import "./RoomCard.css";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ id, name }) => {
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
          <h3>{id + " - " + name}</h3>
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          ></Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default RoomCard;
