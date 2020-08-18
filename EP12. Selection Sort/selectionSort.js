// Store the first element as the smallest value you've seen
// Compare this item to the next item until you find a smaller
// If smaller is found, designate that smaller number to be the new minimum and continue until the end of array
// Repeat
function selectionSort(arr) {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for(let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[lowest]){
                lowest = j;
            }
        }
        // If lowest is already at the beginning, then no need to swap again
        if(i !== lowest){
            //SWAP!
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr;
}
 
console.log(selectionSort([2, 1, 4, 5, 3]))