// Refactored solution with O(n)
function sumZero(arr) {
     let left = 0;
     let right = arr.length - 1;
     while(left < right) {
         let sum = arr[left] + arr[right];
         if (sum === 0){
            return [arr[left], arr[right]];
         } else if(sum > 0){
             right--
         } else {
             left++
         }
     }
}

let result = sumZero([-4, -3, -2, -1, 1, 5, 6, 7]);
console.log(result)