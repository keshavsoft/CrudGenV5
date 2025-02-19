let StartFunc = () => {
    webSocket.send("returnOnlineClients");    
};

export { StartFunc };