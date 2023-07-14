import { useState } from 'react';

export const SocketProvider = ({ children }) => {

    //var client = null;
//
    //const componentWillMount =() => {
    //    const Stomp = require('react-stomp');
    //    var SockJS = require('sockjs');
    //    SockJS = new SockJS("http://192.168.0.1:8080/ws");
    //    client = Stomp.over(SockJS);
    //    client.connect({}, this.onConnected, this.onError);
    //}
//
    //const logInUser = () => {
    //    const userName = this.userName.value;
    //    if(userName.trim()) {
    //        const data = { username };
    //        this.setState({ ...data }, () => {
    //            client.send("/app/join", {}, JSON.stringify({
    //                ...data
    //            }));
    //        });
    //    }
    //}
//
    //return ( 
    //    <SocketContext.Provider>
    //        { children }
    //    </SocketContext.Provider>
    //);
};