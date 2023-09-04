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

console.log(reverseWords('My name is James.'));