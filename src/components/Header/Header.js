import { useState } from "react";
import "./Header.css";
import Button from "../Button/Button";
import JoinModal from "../Modal/Actions/JoinRoom";
import CreateRoomModal from "../Modal/Actions/CreateRoom";
import { Menu, MenuItem, Snackbar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import Img from "../Img/Img";
import { useSocket } from "../../context/socketContext";

const Header = ({ currentScreen, nickname }) => {
  const [openModalJoin, setOpenModalJoin] = useState(false);
  const [openModalCreateRoom, setOpenModalCreateRoom] = useState(false);
  const [openSnackBar, setOpenSnackBar] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const { socket } = useSocket();
  const location = useLocation();
  const roomId = parseInt(location.pathname.substring(6));

  const handleClickMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleClick = () => {
    setOpenSnackBar(true);
  };

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  const copyURL = () => {
    navigator.clipboard.writeText(window.location);
    handleClick();
  };
  const leaveRoom = () => {
    if (location.pathname == "/room/" + roomId)
      socket.unsubscribe("/topic/response");
  };

  return (
    <>
      <div className="header">
        <Link onClick={leaveRoom} to="/">
          {" "}
          <Img theme="Logo" />{" "}
        </Link>
        {currentScreen === "home" ||
          (currentScreen === "hall" && (
            <div className="botoes">
              <Button theme="secondary" onClick={() => setOpenModalJoin(true)}>
                Entrar em uma sala
              </Button>
              <Button
                theme="primary"
                onClick={() => setOpenModalCreateRoom(true)}
              >
                Criar uma sala
              </Button>
            </div>
          ))}
        {currentScreen === "room" && (
          <div className="botoes">
            <Button theme="expand" onClick={handleClickMenu}>
              {nickname}
            </Button>
            <Menu anchorEl={anchorEl} open={open} onClose={handleCloseMenu}>
              <MenuItem onClick={handleCloseMenu} className="menuItem">
                <Link to="/" onClick={leaveRoom}>
                  Sair da sala
                  <Img theme="Logout" />
                </Link>
              </MenuItem>
            </Menu>
            <Button theme="primary" copy="true" onClick={copyURL}>
              Copiar link da sala
            </Button>
          </div>
        )}
        <JoinModal
          isOpen={openModalJoin}
          setModalOpen={() => setOpenModalJoin(!openModalJoin)}
        />
        <CreateRoomModal
          isOpen={openModalCreateRoom}
          setModalOpen={() => setOpenModalCreateRoom(!openModalCreateRoom)}
        />
      </div>
      <Snackbar
        open={openSnackBar}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Link copiado com sucesso!"
      />
    </>
  );
};

export default Header;
