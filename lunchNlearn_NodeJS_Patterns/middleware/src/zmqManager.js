
function zmqManager(socket) {
    const privates = { 
        socket: socket,
        inboundMiddleware: [],
        outboundMiddleware: []
    }

    function ZmqManager (socket) {
        privates.socket = socket

        socket.on('message', message => {
            this.executeMiddleware(privates.inboundMiddleware, {
                data: message
            })
        })
    }

    ZmqManager.prototype.send = function (data) {
        const message = { data: data }
        this.executeMiddleware(privates.outboundMiddleware, message, () => {
            privates.socket.send(message.data)
        })
    }

    ZmqManager.prototype.use = (middleware) => {
        if (middleware.inbound) {
            privates.inboundMiddleware.push(middleware.inbound)
        }
        if (middleware.outbound) {
            privates.outboundMiddleware.unshift(middleware.outbound)
        }
    }

    ZmqManager.prototype.executeMiddleware = function (middleware, arg, finish) {
        function iterator (index) {
            if (index === middleware.length) {
                return finish && finish()
            }
            middleware[index].call(this, arg, err => {
                if (err)
                    return console.log('Error! ', err)

                iterator.call(this, ++index)
            })
        }
        iterator.call(this, 0)
    }

    return new ZmqManager(socket)
}

module.exports = zmqManager