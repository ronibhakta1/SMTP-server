const { SMTPServer } = require("smtp-server");

const server = new SMTPServer({
    allowInsecureAuth: true,
    authOptional: true,
    logger: true,
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
    },
    onData(stream, session, callback){
        console.log("Data Stream Received from", session.id);
        stream.on('data', (data)=>{console.log("onData:",data.toString())});
        stream.on("end", ()=>{
            console.log("End of Data Stream from", session.id);
            callback();
        })

    }
});

server.on("error", (err)=>{
    console.log("SMTP Server Error Ocurred", err.message);
})
server.listen(25, ()=>{
    console.log("SMTP Server is listening on port", server.server.address().port);
});
