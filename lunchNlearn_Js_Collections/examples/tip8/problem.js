
const defaults = new Map()
    .set('color', 'brown')
    .set('breed', 'beagle')
    .set('state', 'kansas')
    
const filters = new Map()
    .set('color', 'black')

function applyDefaults(map, defaults) {
    for (const [key, value] of defaults) {
        if (!map.has(key)) {
            map.set(key, value);
        }
    }
}