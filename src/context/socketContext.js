import { createContext, useContext, useEffect, useState} from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
const SocketContext = createContext();
const SOCKET_URL = 'http://localhost:8080/ws';

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const socket = new SockJS(SOCKET_URL);
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, () =>{}, e => { console.log('error', e); });

        setSocket(stompClient);
        
    }, []);

    return(
        <SocketContext.Provider value ={{socket}}>
            {children}
        </SocketContext.Provider>
    );

};

export const useSocket = () => useContext(SocketContext);