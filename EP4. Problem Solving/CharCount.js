function charCount(s) {
    freq = {};
    for(var i = 0; i < s.length; i++) {
        var char = s[i].toLowerCase()
        // if (/[a-z0-9]/.test(s[i]))
        if (freq.hasOwnProperty(s[i])) {
            freq[s[i]]++;
        } 
        else {
            freq[s[i]] = 1; 
        }
    }
    return freq;
}

// console.log(charCount("EmptyEEe"));

function charCountAlter(s) {
    let freq = {};
    for(var char of s) {
        // char = char.toLowerCase();
        if (/[a-z0-9]/.test(char)) {
            freq[char] = ++freq[char] || 1;
        } 
    }
    return freq;
}

console.log(charCountAlter("asdasd"))