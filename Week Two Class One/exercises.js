// Exercise 1 
console.log('Hello World!');

// Exercise 2
let name = 'James'
console.log(name);

// Exercise 3
let rectangle_width = 50
let rectangle_length = 25
let area = rectangle_length * rectangle_width
console.log(area);

// Exercise 4
let random_number = 24

if (random_number % 2 === 0) {
    console.log('This number is even.');
}
else {
    console.log('This number is odd.');
}

// Exercise 5
days = 1

while (days < 11) {
    console.log(days);
    days++;
}

// Exercise 6
const your_name = prompt("Enter Your Name: ", 'James');
console.log('Hello ' + your_name);

// Exercise 7
let users_number = prompt("Enter a number to find it's factorial: ", 4);
let factorial = 0;

while (users_number === '' || isNaN(users_number) || users_number < 0) {
    users_number = prompt('Please enter a valid number.');
}

if (!isNaN(users_number)) {
    if (users_number === 0 || users_number === 1) {
        factorial = 1;
    } else if (users_number > 1) {
        let result = 1;
        for (let i = 2; i <= users_number; i++) {
            result *= i;
        }
        factorial = result;
    }
}

console.log(`The factorial of ${users_number} is: ${factorial}`);

// Exercise 8 
let user_year = prompt('What year is it?', 2023);

if (user_year % 4 === 0) {
    console.log('This is a leap year!');
}
else {
    console.log('This is not a leap year.');
}

// Exercise 9
let start = 1;
let sum = 0;

while (start < 101) {
    //Need to add the current sum + the next number
    sum = sum + start;
    console.log(sum);
    start++;
}

// Exercise 10
user_number_one = (parseInt(prompt('Pick a number: ')));
user_number_two = (parseInt(prompt('Pick a second number: ')));

console.log(user_number_one + user_number_two);
console.log(user_number_one * user_number_two);
console.log(user_number_one - user_number_two);
console.log(user_number_one / user_number_two);

// Exercise 11
let city = 'Jackson'
let my_num = 41
let real = true
let high_score = null
let usersnames = undefined

student = {
    name : 'John Doe',
    age : 21
};

favorite_books = ['The Witcher', 'The Great Gatsby', 'The Hobbit']

let my_name