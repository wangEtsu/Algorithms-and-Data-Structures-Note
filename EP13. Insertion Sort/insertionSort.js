function insertionSort(arr){
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        // Loop backward until the beginning
        for(var j = i - 1; j >= 0 && arr[j] > currentVal; j--){
            // Where to insert the currentVal?
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = currentVal
    }

    return arr;
}

console.log(insertionSort([2, 1, 5, 3 ,6]))