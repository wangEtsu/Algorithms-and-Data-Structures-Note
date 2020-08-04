function linearSearch(arr){
    for(let i = 0; i < arr.length; i++){
        if (arr[i] === "B"){
            return [i, arr[i]]
        }
    }
    return -1;
}

arr = ["A", "B", "C", "D"]
result = linearSearch(arr)
console.log(result)