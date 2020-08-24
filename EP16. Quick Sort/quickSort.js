// Pivot helper
function pivot(arr, start=0, end=arr.length+1){
    function swap(array, i, j){
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let pivot = arr[start];
    let swapIdx = start;
    for(let i = start + 1; i < arr.length; i++){
        if(pivot > arr[i]){
            swapIdx++;
            swap(arr, swapIdx, i);
            console.log(arr);
        }
    }
    swap(arr, start, swapIdx);
    return swapIdx;
}

// call pivot() recursively until all is sorted
function quickSort(arr, left = 0, right = arr.length - 1){
    if(left < right) {
        let pivotIndex = pivot(arr, left, right)
        //left
        quickSort(arr, left, pivotIndex-1)
        //right
        quickSort(arr, pivotIndex+1, right)
    } 
    return arr;
}

quickSort([4, 2, 1, 5, 9])