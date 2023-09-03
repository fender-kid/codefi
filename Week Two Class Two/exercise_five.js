function reverseString(some_string) {
    const string_chars = some_string.split('');
    const reverse_array = string_chars.reverse();
    const join_array = reverse_array.join('');
    return join_array;
}

console.log(reverseString('Hello'));