/* function removeItem(items, removable) {
    const updated = []
    for (let i = 0; i < items.length; i++) {
        if (items[i] !== removable) {
            updated.push(items[i])
        }
    }   
    return updated
} */

function removeItem(items, removable) {
    const index = items.indexOf(removable)
    return items.splice(index, 1)
}

const books = ['practical vim', 'moby dick', 'the dark tower'];
const recent = removeItem(books, 'moby dick');

const novels = removeItem(books, 'practical vim');

