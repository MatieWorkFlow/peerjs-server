<script src="https://cdnjs.cloudflare.com/ajax/libs/peerjs/0.3.16/peer.min.js"></script>
const peer = new Peer('receiver', { host: 'localhost', port: 9000, path: '/' })

peer.on('connection', (conn) => {
  conn.on('data', (data) => {
    console.log(data);
  })
})
