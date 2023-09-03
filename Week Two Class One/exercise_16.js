// user_number = prompt('Enter a number: ', 13);

// while (user_number === '' || isNaN(user_number)) {
//     user_number = prompt('Please enter a valid number.');
// }

function isPrime(num) {
    if (num <= 1) {
        return false; // numbers less than or equal to 1 are not prime.
    } else if (num <= 3) {
        return true; // 2 and 3 are both prime.
    } else if (num % 2 === 0 || num % 3 === 0) {
        return false; // numbers divisible by 2 or 3 are not prime.
    } else if (num > 4 && num % 3 != 0) {
        for (let i = 5; i * i <= num; i += 6) {
            if (num % i === 0 || num % (i + 2) === 0) {
                return false; // If the number is divisible by i or (i + 2), it's not prime.
            }
        }
    }

    return true; // if none of the above conditions are met, the number is prime.
}

// console.log(isPrime(user_number));

const prime_array = [];
const non_prime_array = [];

for (let i = 0; i <= 100; i ++) {
    if (isPrime(i)) {
        console.log(`${i} is prime`);
        prime_array.push(i);
    } else {
        console.log(`${i} is not prime`);
        non_prime_array.push(i);
    }
}

console.log('Prime numbers include: ');
console.log(prime_array);
console.log('Non Prime numbers include: ');
console.log(non_prime_array);