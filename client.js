const net = require('net');
const { IP, PORT } = require('./constants');


/**
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: IP,
    port: PORT
  });
  // interpret incoming data as text

  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  
  });
  conn.on('end',() =>{
    console.log(`Server Says: `,'you ded cuz you idled' );

  return conn;
  });
  conn.on('connect',() => {
    console.log(`Server Says: `,'Successfully connected to game server!');
  });
  conn.on('connect',() => {
    conn.write("Name: ATM")
  });
  return conn;
}

module.exports = {connect};