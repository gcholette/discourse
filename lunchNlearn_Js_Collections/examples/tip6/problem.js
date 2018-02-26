let filters = {}

function addFilters(filters, key, value) {
    filters[key] = value;
}
function deleteFilters(filters, key) {
    delete filters[key];
}
function clearFilters(filters) {
    filters = {};
    return filters;
}