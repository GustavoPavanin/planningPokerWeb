
import { createContext, useContext, useEffect, useState } from "react";
import ioClient, { Socket } from "socket.io-client";

const SOCKET_SERVER_URL = "http://localhost:8080/poker";

const SocketContext = createContext({
    socket: null,
});

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() =>{
        setSocket(ioClient(SOCKET_SERVER_URL));
    }, []);

    return ( 
        <SocketContext.Provider 
            value={{
                socket,
            }}
        >
            { children }
        </SocketContext.Provider>
    );
};

export const useSocket = () => useContext(SocketContext);