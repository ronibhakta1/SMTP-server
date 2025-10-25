const { SMTPServer } = require("smtp-server");

const server = new SMTPServer(options);

server.listen(port[, host][, callback]);

server.close(callback);