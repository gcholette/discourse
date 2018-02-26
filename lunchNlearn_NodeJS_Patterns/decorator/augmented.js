function addFireball(mage) {
    mage.spells.fireball = () => console.log("woosh!")
    return mage
}

module.exports = addFireball