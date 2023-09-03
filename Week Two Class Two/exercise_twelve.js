function objectToArray(obj) {
    const keys = Object.keys(obj).sort(); // get the keys and sort them.
    const values = keys.map(key => obj[key]); // uses an arrow function to get corresponding values.

    // This function would do the same thing as the arrow function.
    // const values = keys.map(function(key) {
    //     return obj[key];
    //   });

    return [keys, values];
}

const student = {
    name: 'Bob',
    age: 99,
    gender: 'male',
    children: 3,
    country: 'United States',
}

const [sorted_keys, sorted_values] = objectToArray(student);

console.log('Sorted Keys:', sorted_keys);
console.log('Values in the Corresponding Order:', sorted_values);