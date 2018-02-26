const zmq            = require('zmq')
const zmqManager     = require('./zmqManager')
const jsonMiddleware = require('./jsonMiddleware')

const reply = zmq.socket('rep') 
reply.bind('tcp://127.0.0.1:5000')

const zmqm = zmqManager(reply)
zmqm.use(jsonMiddleware.json())

zmqm.use({
    inbound: function (message, next) {
        console.log(`[${new Date(message.data.time)}]Received: `, message.data.action)

        if (message.data.action === 'ping') {
            this.send({ 
                action: 'pong', 
                time: message.data.time 
            })
        }
        next()
    }
})

console.log('listening on 5000!')