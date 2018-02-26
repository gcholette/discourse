const dogs = [
    {
        name: 'max',
        color: 'black',
    },
    {
        name: 'don',
        color: 'black',
    },
    {
        name: 'shadow',
        color: 'chocolate',
    },
];

function getColors(dogs) {
    return dogs.map(dog => dog.color)
}
 
function getUnique(attributes) {
    const unique = []
    for (const attribute of attributes) {
        if (!unique.includes(attribute)) {
            unique.push(attribute)
        }
    }
    return unique
}

const colors = getColors(dogs)

console.log(getUnique(colors))

// ['black', 'chocolate']