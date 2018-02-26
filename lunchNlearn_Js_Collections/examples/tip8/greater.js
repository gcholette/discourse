function applyDefaults(map, defaults) {
    const copy = new Map([...map]);
    for (const [key, value] of defaults) {
        if (!copy.has(key)) {
            copy.set(key, value);
        }
    }
    return copy;
}