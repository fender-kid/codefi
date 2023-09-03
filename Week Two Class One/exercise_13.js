function two_numbers(num, length) {
    if (num === 0) {
        // return an empty array if num is 0.
        return [];
    }

    // create an array to store the multiples of num * length
    multiples_array = [];

    // Create a fore loop to multiple num * length repeatedly until it reaches the length
    for (let i = 1; multiples_array.length < length; i++) {
        multiples_array.push(num * i);
    }

    return multiples_array;
}

console.log(two_numbers(10,10));