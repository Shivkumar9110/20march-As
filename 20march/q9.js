function numberChecker(numbers) {
    // Return a function that checks if a number is in the array
    return function(number) {
        return numbers.includes(number);
    };
}

// Example usage:
const numbersArray = [1, 2, 3, 4, 5];
const checkNumber = numberChecker(numbersArray);

console.log(checkNumber(3)); // Output: true
console.log(checkNumber(6)); // Output: false
