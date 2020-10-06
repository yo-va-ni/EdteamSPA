const token = "ESTEESMITOKENQUEPASARCTMRTRANQUINMSQUEPASACAUSAGAA";

module.exports = io => {

    const validateToken = (session) => {
        tokenReceived = token;
    }

    const sendMessage = (data) => {

    }

    io.on("connection", (socket) => {

        if (!validateToken(socket.request._query.token)) {
            return ;
        }
        nick = socket.request._query.nickname;
        let messageCN = {
            type: "Connection",
            user: nick,
            message: ""
        };
        socket.broadcast.emit("new-user-connected", messageWS);
        
        // Messaging
        socket.on("message", (data) => {
            let user = socket.request._query.nickname;

            if(data.type === "ping"){
                socket.emit("pong", {type: "pong", user: user, message: "pong"});
                return;
            }

            let messageWS = {
                type: "message",
                user: user,
                message: message,
            }
            socket.broadcast.emit("chat-message", messageWS);
        });

        // Disconnection
        socket.on('disconnect', (data) => {
            if (!validateToken(socket.request._query.token)) {
                return ;
            }
            nick = socket.request._query.nickname;
            let messageCN = {
                type: "Disconnection",
                user: nick,
                message: ""
            };

            socket.broadcast.emit("bye-user-connected", messageWS);
        });
    });
};