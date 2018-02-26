const filters = new Map()

function addFilters(filters, key, value) {
    filters.set(key, value)
}
function deleteFilters(filters, key) {
    filters.delete(key)
}
function clearFilters(filters) {
    filters.clear()
}