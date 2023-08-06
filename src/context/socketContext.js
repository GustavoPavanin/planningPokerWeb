import { createContext, useContext, useEffect, useState} from 'react';
import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
const SocketContext = createContext({
    socket: null,
    rooms: [],
});
const SOCKET_URL = 'http://localhost:8080/ws';

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        const socket = new SockJS(SOCKET_URL);
        const stompClient = Stomp.over(socket);
        stompClient.connect({}, () =>{
            onConnect(stompClient);
        }, e => { console.log('error', e); });

        setSocket(stompClient);
        
    }, []);

    const onConnect = (stompClient) => {
        stompClient.subscribe("/topic/roomCreated", onCreateRoom)
        stompClient.subscribe("/topic/response", onJoin)
    }
    
    const onCreateRoom = (payload) => {
        const room = JSON.parse(payload.body);
        setRooms([...rooms, room]);
    }
    
    const onJoin = (payload) => {
        const room = JSON.parse(payload.body);
        
        setRooms([...rooms, room]);
        console.log(room);
    }

    const getRoom = (id) => {
        return rooms.filter(room => room.id === id);
    }

    const getRoomUsers = (id) => {
        return  getRoom.users;
    }

    const disconnect = () => {
        if (socket) {
            socket.deactivate();
        }
        console.log('Desconectado do WebSocket');
    };

    return(
        <SocketContext.Provider value ={{socket, rooms}}>
            {children}
        </SocketContext.Provider>
    );

};

export const useSocket = () => useContext(SocketContext);