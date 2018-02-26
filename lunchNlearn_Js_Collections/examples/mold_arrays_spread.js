const tiles = [1, 2, 3, 4]

const moreTiles = [...tiles, 5, 6, 7]
// [1, 2, 3, 4, 5, 6, 7]

const shiftedTiles = [-2, -1, 0, ...tiles]
// [-2, -1, 0, 1, 2, 3, 4]

// prevents reference passing
const copied_old = tiles.slice()
const copied = [...tiles]

const tiles = [1,2,3,4,5]

const pastaTiles = [...tiles.slice(0, 2), 'pasta', ...tiles.slice(3,5)]
// [ 1, 2, 'pasta', 4, 5 ]