let errors = new Map([
    [100, 'Invalid name'],
    [110, 'Name should only contain letters'],
    [200, 'Invalid color'],
]);
errors.get(100);
// 'Invalid name'