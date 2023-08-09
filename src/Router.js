import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Room from "./pages/room/Room";
import { SocketProvider } from "./context/socketContext";
import Hall from "./components/Hall/Hall";

const Router = () => {
    return (
        
            <BrowserRouter>
                <SocketProvider>
                    <Routes>
                        <Route path="*" element={<Home />}/>
                        <Route path="/room/" element={<Room />}/>
                        <Route path="/room/:roomId" element={<Hall />}/>
                    </Routes>
                </SocketProvider>
            </BrowserRouter>
        
    )
}

export default Router;