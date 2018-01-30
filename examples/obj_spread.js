const book = {
    title: 'Reasons and Persons',
    author: 'Derek Parfit',
}

const update = { ...book, year: 1984 }
// { title: 'Reasons and Persons', author: 'Derek Parfit', year: 1984}

// it will use the last value for same keys
const update = { ...book, title: 'Reasons & Persons' }
// { title: 'Reasons & Persons', author: 'Derek Parfit' }

const updated = Object.assign({}, defaults, book)

// Becomes

const updated = { ...defaults, ...book }

// With nested attributes
const employee2 = Object.assign(
    {}, 
    defaultEmployee, 
    {
        name: Object.assign({}, defaultEmployee.name),
    }
);

// becomes 

const employee = {
    ...defaultEmployee,
    name: {
        ...defaultEmployee.name,
    },
}