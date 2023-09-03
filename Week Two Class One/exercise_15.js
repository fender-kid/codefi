const user_number = prompt('Enter your number.');

while (user_number === '' || isNaN(user_number)) {
    user_number = prompt('Please enter a valid number.');
}

for (let i = 1; i <= 10; i++) {
    const result = user_number * i;
    console.log(`${user_number} * ${i} = ${result}`);
}