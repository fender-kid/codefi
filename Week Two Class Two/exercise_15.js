function anagramChecker(word_one, word_two) {
    // Create an empty array to later store the characters from each word.
    const word_one_array = [];
    const word_two_array = [];

    // Convert the strings to all lowercase characters.
    let lower_word_one = word_one.toLowerCase();
    let lower_word_two = word_two.toLowerCase();

    // Loop through the first word and store the characters in an array.
    for (char of lower_word_one) {
        word_one_array.push(char);
    }

    // Loop through each character in the second word and store each in an array.
    for (char of lower_word_two) {
        word_two_array.push(char);
    }

    // Check to be sure both arrays are equal length.
    if (word_one_array.length !== word_two_array.length) {
        return false;
    }

    // Sort both arrays
    let sorted_one = word_one_array.slice().sort();
    let sorted_two = word_two_array.slice().sort();

    // Check if word_one_array is equivalent to word_two_array
    for (let i = 0; i < sorted_one.length; i++) {
        if (sorted_one[i] !== sorted_two[i]) {
            return false;
        }
    }

    return true;
}

// Test
console.log(anagramChecker('Bob', 'James')); // false
console.log(anagramChecker('Dog', 'God')); // true
console.log(anagramChecker('silent', 'listen')); // true
console.log(anagramChecker('Bob', 'Bobooo')); // false
console.log(anagramChecker('race', 'care')); // true
console.log(anagramChecker('debit', 'bad')); // false
console.log(anagramChecker('hello', 'world')); // false

