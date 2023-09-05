function reverse_word(str) {
    return str.split('').reverse().join('');
}

function isPalindrome(word) {
    // remove punctuation
    let plain_word = word.replace(/[\.,!?']+/g, '');
    // remove spaces
    plain_word = plain_word.replace(/\s/g, '');
    // convert everything to lowercase
    plain_word = plain_word.toLowerCase();
    if (plain_word == reverse_word(plain_word)) {
        return true;
    } else {
        return false;
    }
}

// tests
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("A man, a plan, a canal, Panama")); // true
console.log(isPalindrome("Was it a car or a cat I saw?")); // true
console.log(isPalindrome("hello")); // false
console.log(isPalindrome("Palindrome")); // false
console.log(isPalindrome("12321")); // true
console.log(isPalindrome("No lemon, no melon")); // true
console.log(isPalindrome("Madam, in Eden, I'm Adam")); // true
console.log(isPalindrome("")); // true (empty string is considered a palindrome)
console.log(isPalindrome("abcdeedcba")); // true (long palindrome)
