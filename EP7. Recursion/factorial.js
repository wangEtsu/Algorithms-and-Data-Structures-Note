function factorial(num) {
    if(num === 1){
        return 1
    }
    return factorial(num - 1) * num
}

result = factorial(3)
console.log(result)