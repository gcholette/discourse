const EventEmitter = require('events').EventEmitter

function createMage() {
    let life = 100

    function Mage() {}

    Mage.prototype = 
        Object.create(EventEmitter.prototype)

    Mage.prototype.spell = (spell) => 
        console.log(`used ${spell}`)

    Mage.prototype.hit = function (dmg) { 
        life -= dmg
        this.emit('hit', life) 
    }

    return new Mage()
}

const mage = createMage()

mage.on('hit', life => 
    console.log("ow! " + life + " life left"))

mage.hit(20)