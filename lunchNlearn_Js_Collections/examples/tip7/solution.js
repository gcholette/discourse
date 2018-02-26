const filters = new Map()
.set('color', 'black')
.set('breed', 'labrador')

[...filters]
// [['color', 'black'], ['breed', 'labrador']]

function getAppliedFilters(filters) {
    const applied = [...filters]
        .map(([key, value]) => `${key}:${value}`)
    return `Your filters are: ${applied.join(', ')}.`
}

// 'Your filters are: breed:labrador, color:black.'

function sortByKey(a, b) {
    return a[0] > b[0] ? 1 : -1;
}

function getSortedAppliedFilters(filters) {
    const applied = [...filters]
        .sort(sortByKey)
        .map(([key, value]) => `${key}:${value}`)
        .join(', ');

    return `Your filters are: ${applied}.`;
}

// 'Your filters are: breed:labrador, color:black.'