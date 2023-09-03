let num = prompt('Enter a number to find out if it is positive, negative, or zero.', 7);

while (num === '' || isNaN(num)) {
    num = prompt('Please enter a valid number.');
}

if (num > 0) {
    console.log('Your number is positive.');
} else if (num < 0) {
    console.log('Your number is negative.');
} else if (num == 0) {
    console.log('Your number is zero.');
}