function printProperties(user) {
    for (const property in user) {
        const property_value = user[property];
        console.log(`${property}: ${property_value}`);
    }
}

user = {
    name: 'John',
    age: 30,
    occupation: 'Pilot',
}