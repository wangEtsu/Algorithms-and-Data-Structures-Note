// Compare these two functions that are used to add up to a certain number n
// Solution 1
// O(n) The performance is bonded to number of n, cuz n times of loop
function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i
    }
    return total;
}

// Solution 2
// O(1) When n grows, it has no affect on the performance
function addUpToAlter(n) {
    return n * (n + 1) /2
}

console.log("")
 
// O(n^2) Nested loops for example
for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {

    }
}
