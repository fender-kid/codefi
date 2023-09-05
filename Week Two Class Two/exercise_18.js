function reverseWords(string) {
    let plain_word = '';
    let final_word_array = [];

    // Split my string into an array of words.
    const word_array = string.split(' ');
    // Remove any punctuation.
    for (word of word_array) {
        plain_word = word.replace(/[\.,!?]+$/, '');
        final_word_array.push(plain_word);
    }
    // Create an array of the words in reverse order.
    const reversed_words_array = final_word_array.reverse();
    // Join the words back together to form a sentence.
    const reversed_string = reversed_words_array.join(' ');
    return reversed_string;
    
}

// tests
console.log(reverseWords('My name is James.')); // Output: 'James is name My.'
console.log(reverseWords('Hello, world!')); // Output: 'world Hello!'
console.log(reverseWords('This is a test.')); // Output: 'test a is This.'
console.log(reverseWords('A man, a plan, a canal, Panama.')); // Output: 'Panama canal a plan a man, A.'
console.log(reverseWords('Quick brown fox jumps over the lazy dog.')); // Output: 'dog lazy the over jumps fox brown Quick.'
console.log(reverseWords('Programming is fun!')); // Output: 'fun is Programming!'
console.log(reverseWords('SingleWord')); // Output: 'SingleWord'
