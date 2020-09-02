const { PeerServer } = require('peer');
const path = '/peerServer'
const port = process.env.PORT || 4000
const host = process.env.HOST || '0.peerjs.com'

const peerServer = new PeerServer(undefined, { host, port, path, debug: 3})


console.log(`port: ${port}\npath: ${path}\nhost: ${host}`)