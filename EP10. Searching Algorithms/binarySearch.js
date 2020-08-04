function binarySearch(arr, elem){
    let start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2);

    while(arr[middle] !== elem) {
        if(elem < arr[middle]){
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2);
    }
    if(arr[middle] === elem){
        return middle
    }

}

arr = [1, 2, 3, 4, 6, 7, 10, 20, 30, 31, 50]
result = binarySearch(arr, 7);
console.log(result);