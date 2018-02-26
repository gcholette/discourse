const sections = [ 'contact', 'shipping' ]

function displayShipping(sections) {
    return sections.indexOf('contact') > -1
}

console.log(displayShipping(sections))