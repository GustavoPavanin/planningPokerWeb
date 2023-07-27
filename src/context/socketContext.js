import { Client } from '@stomp/stompjs';
import { createContext, useContext, useEffect, useState } from 'react';



const SocketContext = createContext(
    {
        stompClient: null,
    }
);

const SOCKET_SERVER_URL = "ws://localhost:8080/ws";

export const SocketProvider = ({ children }) => {
    const [stompClient, setStompClient] = useState(null);
    const socket = new WebSocket(SOCKET_SERVER_URL);
    useEffect(() =>{
        const client = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log(str),
        });

        client.onConnect = (frame) => {
            console.log('Conectado ao WebSocket');
            // Após a conexão, você pode enviar uma mensagem para se juntar a uma sala
            client.send('/app/joinRoom', {}, JSON.stringify(username));
          };
      
          client.activate();
        setStompClient(client);

    },[])
    
    return(
        <SocketContext.Provider value = {{stompClient}}>
            {children}
        </SocketContext.Provider>
    );

};

export const useSocket = () => useContext(SocketContext);