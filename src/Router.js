import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import { SocketProvider } from "./context/socketContext";
import Roon from "./pages/roon";

const Router = () => {
    return (
        
            <BrowserRouter>

                    <Routes>
                        
                        <Route path="*" element={<Home />}/>
                        <Route path="/roon" element={<Roon />}/>
                    </Routes>
                
            </BrowserRouter>
        
    )
}

export default Router;