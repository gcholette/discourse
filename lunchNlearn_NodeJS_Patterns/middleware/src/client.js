const zmq = require('zmq')
const zmqManager = require('./zmqManager')
const jsonMiddleware = require('./jsonMiddleware')

const request = zmq.socket('req')
request.connect('tcp://127.0.0.1:5000')

const zmqm = zmqManager(request) 

zmqm.use(jsonMiddleware.json())
zmqm.use({
    inbound: function (message, next) {
        console.log('Received message: ', message.data.action)
        next()
    }
})

setInterval(() => {
    zmqm.send({ 
        action: 'ping', 
        echo: Date.now 
    })
}, 200)