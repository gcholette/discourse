function getUnique(attributes) {
    return [...new Set(attributes)];
}

function getUniqueColors(dogs) {
    const unique = new Set();
    for (const dog of dogs) {
        unique.add(dog.color);
    }
    return [...unique];
}


