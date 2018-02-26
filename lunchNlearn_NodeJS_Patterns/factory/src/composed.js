const caster = (state) => ({
    cast: (spell) => {
        console.log(`${state.name} casts ${spell}!`)
        state.mana -= 10
    }
})

const slasher = (state) => ({
    slash: () => {
        console.log(`${state.name} slashes!`)
        state.stamina -= 25
    }
})

const mage = (name) => {
    let state = {
        name,
        health: 100,
        mana: 100
    }

    return Object.assign(state, caster(state))
}

const warrior = (name) => {
    let state = {
        name,
        health: 100,
        stamina: 100
    }

    return Object.assign(state, slasher(state))
}

gandalf = mage('Gandalf')
gandalf.cast('fireball')     // Gandalf casts fireball!
console.log(gandalf.mana)    // 90

dwarf = warrior('some dwarf')
dwarf.slash()               // some dwarf slashes!
console.log(dwarf.stamina)  // 75