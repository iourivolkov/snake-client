const net = require("net");
const { IP, PORT } = require("./constants");
// require constants - IP & PORT

// establishe a connection with the game server
const connect = () => {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

// interpret incoming data as text
conn.setEncoding("utf8");

  // the earliest point at which we can write to the connection
  conn.on('connect', () => {
    console.log("Successfully connected to game server");
    conn.write('Name: IVV');
  })

  // receive data from the server
  conn.on('data', (data) => {
    console.log(`Server says: ${data}`);
  })
  // conn object represents the connection made with the server
  return conn;  
};


module.exports = {connect};