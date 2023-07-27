import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Room from "./pages/room";
import { SocketProvider } from "./context/socketContext";

const Router = () => {
    return (
        
            <BrowserRouter>
                {/* <SocketProvider> */}
                    <Routes>
                        <Route path="*" element={<Home />}/>
                        <Route path="/room:roomId" element={<Room />}/>
                    </Routes>
                {/* </SocketProvider> */}
            </BrowserRouter>
        
    )
}

export default Router;