// Prompt user to enter a value
// Prompt user to enter a value
let b = prompt("Enter the value");
let a = parseInt(b);

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false; // 1 and numbers less than 1 are not prime
    if (num <= 3) return true;  // 2 and 3 are prime numbers
    if (num % 2 == 0 || num % 3 == 0) return false; // divisible by 2 or 3
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i == 0 || num % (i + 2) == 0) return false;
    }
    return true;
}

// Check if the entered number is prime
if (isPrime(a)) {
    alert("It is a prime number");
} else {
    alert("It is not a prime number");
}
