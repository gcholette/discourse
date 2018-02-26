// The inbound middleware deserialises the data 
// and assings it to message.data so it can be processed
// down the pipeline

// the outbound middleware serialises any data in message.data
module.exports.json = () => {
    return {
        inbound: function(message, next) {
            message.data = JSON.parse(message.data.toString())
            next()
        },
        outbound: function(message, next) {
            message.data = new Buffer(JSON.stringify(message.data))
            next()
        }
    }
}