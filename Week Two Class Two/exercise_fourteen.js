function isBalanced(str) {
    const stack = [];

    for (const char of str) {
        if (char === '(' || char === '[') {
            stack.push(char);
        } else if (char === ')' || char === ']') {
            if (stack.length === 0) {
                return false; // If length is equal to zero then there is no opening bracket to match.
            }

            // Save the 'popped' value to a 'first_bracket' variable.
            const first_bracket = stack.pop();

            // Check if the current closing bracket matches the opening bracket.
            if ((char === ')' && first_bracket !== '(') || (char === ']' && first_bracket !== '[')) {
                return false; // Mismatched brackets.
            }
        }
    }

    // If the stack is empty at the end, all brackets are balanced.
    return stack.length === 0;
}

// Testing
console.log(isBalanced('[()]([])()[]{}()'));
console.log(isBalanced('{(])'));
