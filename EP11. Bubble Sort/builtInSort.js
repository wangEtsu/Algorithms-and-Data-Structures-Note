console.log([2, 5, 19, 1, 3, 5, 7].sort())
// [1, 19, 2, 3, 5, 5, 7]

strArr = ["D", "A", "C", "E"]
console.log(strArr.sort())
// ["A", "C", "D", "E"]

function numberCompare(num1, num2) {
    return num1 - num2;
}

console.log([2, 5, 19, 1, 3, 5, 7].sort(numberCompare))
// [1, 2, 3, 5, 5, 7, 19]

// By default, the sort() function in JS can only sort string with Unicode Order
// A comparator function is needed to sort number and other customized sorting