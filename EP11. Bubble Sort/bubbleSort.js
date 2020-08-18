function bubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr);
        for (let j = 0; j < arr.length; j++) {

            if (arr[j] > arr[j + 1]) {
                console.log(arr[j], arr[j + 1])
                // Swap
                var temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([27, 25, 12, 23, 41, 2]))