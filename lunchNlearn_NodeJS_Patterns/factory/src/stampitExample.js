const stampit = require('stampit')

const character = stampit().props({
    name: '',
    life: 100,
    x: 0,
    y: 0
})

const walker = stampit().methods({
    walk(x, y) {
        this.x += x
        this.y += y
    }
})

const runner = stampit().methods({
    run(x, y) {
        this.x += x * 2
        this.y += y * 2
    }
})

const fighter = stampit().methods({
    fight() {
        console.log('punch!')
    }
})

const marksman = stampit().methods({
    shoot() {
        console.log('pow!')
    }
})

const ninja = stampit.compose(character, runner, fighter)
const police = stampit.compose(character, walker, fighter, marksman)

const agent007 = police()
agent007.shoot()