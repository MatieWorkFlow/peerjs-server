const peer = new Peer('sender', { host: 'localhost', port: 9000, path: '/' })

const conn = peer.connect('receiver')

conn.on('open', () => {
  conn.send('hi!')
})
