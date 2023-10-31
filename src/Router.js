import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { SocketProvider } from "./context/socketContext";
import Doorway from "./components/Doorway/Doorway";
import Hall from "./pages/Hall";

const Router = () => {
  return (
    <BrowserRouter>
      <SocketProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/room/" element={<Room />} />
          <Route path="/room/:roomId" element={<Doorway />} />
          <Route path="/hall" element={<Hall />} />
        </Routes>
      </SocketProvider>
    </BrowserRouter>
  );
};

export default Router;
