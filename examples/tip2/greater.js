function removeItem(items, removable) {
    const index = items.indexOf(removable)
    return items.slice(0, index).concat(items.slice(index + 1))
}