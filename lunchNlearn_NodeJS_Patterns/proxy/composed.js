function createProxy(subject) {
    return {
      //proxied method
      hello: () => (subject.hello() + ' world!'),
  
      //delegated method
      goodbye: () => (subject.goodbye.apply(subject, arguments))
    };
}

function proxiedCollection(collection) {
    return {
        // Proxied methods 
        find: (query) => {
            if (!query.length) 
                return emptyCursor

            return collection.find.apply(collection, arguments)
        },


        // delegated methods
        update: (query) => collection.update.apply(collection, arguments),
        delete: (query) => collection.delete.apply(collection, arguments)
    }
}