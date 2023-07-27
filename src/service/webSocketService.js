import { Client } from '@stomp/stompjs';

const WebSocketService = () => {
    let stompClient;
    let connectedPromise;
    const SOCKET_URL = 'ws://localhost:8080/ws';
    const connect = () => {
        
        if (stompClient && stompClient.connected) {
            return Promise.resolve();
        } 
        
        if (connectedPromise) {
            return connectedPromise;
        }

        const socket = new WebSocket(SOCKET_URL);
        stompClient = new Client({
            webSocketFactory: () => socket,
            debug: (str) => console.log(str),
        });

        connectedPromise = new Promise((resolve) => {
            stompClient.onConnect = (frame) => {
                console.log('Conectado ao WebSocket');
                resolve();
            };
    
            stompClient.activate();
            
        });

        return connectedPromise;
    };

    const vote = (voteValue) => {
        // Envia o voto para o servidor através do WebSocket
        stompClient.send('/app/vote', {}, JSON.stringify(voteValue));
    };

    const disconnect = () => {
        if (stompClient) {
        stompClient.deactivate();
        }
        console.log('Desconectado do WebSocket');
    };

    const createRoom = (roomInfo) => {
        return connect().then(() => {
            return new Promise((resolve) => {
              stompClient.send('/app/createRoom', {}, JSON.stringify(roomInfo));
              stompClient.subscribe('/room/roomCreated', (message) => {
                const roomId = JSON.parse(message.body);
                resolve(roomId);
              });
              stompClient.subscribe('/room/error', (message) => {
                reject(message.body);
              });
            });
          });
    };

    return { connect, vote, disconnect, createRoom };
}

export default WebSocketService;