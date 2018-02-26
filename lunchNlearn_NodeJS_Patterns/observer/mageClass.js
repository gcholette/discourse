const EventEmitter = require('events').EventEmitter

class Mage extends EventEmitter {
    constructor() {
        super()
        this.life = 100
    }

    hit(dmg) {
        this.life -= dmg
        this.emit('hit', this.life)
    }
}

const mage = new Mage()

mage.on('hit', life => 
    console.log("ow! " + life + " life left"))
mage.hit(20)