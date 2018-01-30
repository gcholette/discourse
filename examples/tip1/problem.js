const sections = [ 'shipping' ]

function displayShipping(sections) {
    if (sections.indexOf('shipping')) {
        return true
    }
    return false
}

console.log(displayShipping(sections))