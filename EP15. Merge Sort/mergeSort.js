// Merge function
// Give two sorted function, it should return one sorted array merged by these two arrays
// [1, 10, 50] [2, 14, 99, 100]
// [1, 2, 10, 14 ... ]
function merge(arr1, arr2){
    let result = [];
    // set up two pointer for each array
    let i = 0;
    let j = 0;
    // Add elements in both array in sorted order
    while(i < arr1.length && j < arr2.length){
        if(arr1[i] > arr2[j]){
            result.push(arr2[j]);
            j++;
        }
        else if(arr1[i] < arr2[j]){
            result.push(arr1[i]);
            i++;
        }
        else if (arr1[i] == arr2[j]){
            result.push(arr1[i]);
            result.push(arr2[j]);
            i++
            j++
        }

    }

    // We will need to add the remaining part 
    while(i < arr1.length){
        result.push(arr1[i])
        i++;
    } 

    while(j < arr2.length){
        result.push(arr2[j])
        j++;
    } 

    return result;

}

console.log(merge([1, 10, 50], [2, 14, 99, 100]))

// Merge Sort function
// Break up the array into halves until in have arrays that are empty or have one element
// Use Recursion
function mergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2);
    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));
    return merge(left, right)

}

console.log(mergeSort([10, 24, 76, 73, 72, 1, 9]));
