const { PeerServer } = require('peer');
const path = '/peerServer'
const port = process.env.PORT || 4000

const peerServer = PeerServer({ port, path, debug: 3})


console.log(`port: ${port}\npath: ${path}`)