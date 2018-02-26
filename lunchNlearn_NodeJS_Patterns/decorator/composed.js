function teleportableWarrior(warrior) {
    return {
      // New method
      teleport: () => console.log ("woosh!"),

      // Delegated method
      slash: () => warrior.slash.apply(warrior, arguments)
    }
}

module.exports = teleportableWarrior