// Create a public function to get all prime numbers
// from 1 to n

function getPrimes(n) {
    const primes = [];
    for (let i = 2; i <= n; i++) {
        if (isPrime(i)) {
        primes.push(i);
        }
    }
    return primes;
    }

// Create a private function to check if a number is prime
function isPrime(n) {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return n > 1;
}

// Create a function to generate 6 random number between 1 and 53
function getLottoNumbers() {
    const numbers = [];
    while (numbers.length < 6) {
        const n = Math.floor(Math.random() * 53) + 1;
        if (!numbers.includes(n)) numbers.push(n);
    }
    return numbers;
}

// output the lotto numbers in console
console.log(getLottoNumbers());
