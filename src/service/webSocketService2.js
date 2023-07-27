import { Stomp } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const WebSocketService2 = () => {
    let stompClient = null;
    const SOCKET_URL = 'http://localhost:8080/ws';

    const  connect = async () => {
        const sock = new SockJS(SOCKET_URL);
        stompClient = Stomp.over(sock);
        try {
            await new Promise((resolve, reject) => {
                stompClient.connect({}, () => {
                    onConnect();
                    resolve();
                }, onError);
            });
        } catch (error) {
            console.error("Erro ao conectar ao WebSocket.", error);
        }
    }

    const onConnect = () => {
        console.log("conectando no websocket.");
    }

    const onError = () => {
        console.log("erro ao conectar no websocket.");
    }
    const disconnect = () => {
        if (stompClient) {
        stompClient.deactivate();
        }
        console.log('Desconectado do WebSocket');
    };

    const createRoom = async (roomInfo) => {
        
        try {
            await connect();
            stompClient.send("/app/createRoom", {}, JSON.stringify({
                ...roomInfo
            }));
        } catch (error) {
            console.error("Erro ao enviar a mensagem.", error);
        }
    };

    return { disconnect,connect,  createRoom };
}

export default WebSocketService2;