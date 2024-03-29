function countPrimeNumbers() {
    let count = 1;
    for (var i = 2; i < 101; i++) {
        for (var j = 2; j < 101; j++) {
            if (!(i % j === 0))
                count++;
        }
    }
}
let tStart = performance.now();
for (let prime = 1; prime < 100; prime++) {
    delay(prime);
}
function delay(prime) {
    setTimeout(() => { countPrimeNumbers() }, 1000);
}
let tEnd = performance.now();
let timeAdj = (tEnd - tStart);
console.log("Execution time of calculating prime numbers 100 times was " + timeAdj + " milliseconds.");