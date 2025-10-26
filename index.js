const { SMTPServer } = require("smtp-server");

const server = new SMTPServer({
    sesure: false,
    onConnect(session, callback){
        console.log("Client Connected", session.id);
        callback();
    },
    onMailFrom(address, session, callback){
        console.log("Mail From:", address.address, session.id);
        callback();
    },
    onRcptTo(address,session,callback){
        console.log("Recipient To:", address.address, session.id);
        callback();
    }
    
});

server.on("error", (err)=>{
    console.log("SMTP Server Error Ocurred", err.message);
})
server.listen(port[22, host][port, callback]);

server.close(callback);