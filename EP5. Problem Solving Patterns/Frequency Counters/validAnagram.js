function validAnagram(s1, s2) {
    let lookup = {}
    for (let char of s1){
        lookup[char] ? lookup[char] += 1 : lookup[char] = 1
    }
  
    // console.log(lookup)

    for (let i = 0; i < s2.length; i++) {
        let letter = s2[i];
        if (!lookup[letter]) {
            return false
        } else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
let s1 = "abcde"
let s2 = "edcba"
console.log(validAnagram(s1, s2))



















