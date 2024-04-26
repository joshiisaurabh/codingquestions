1)Find non duplicates
const arr = [5, 2, 2, 3, 5, 6, 3, 7];
const nonDuplicates = [];

for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        nonDuplicates.push(arr[i]);
    }
}

console.log(nonDuplicates); // Output: [6, 7]

2)
Input: s = "abcabcbb"
Output: 3
Find longest unique substring.
function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    const charIndexMap = new Map(); // Map to store the index of each character
    
    for (let end = 0; end < s.length; end++) {
        const char = s[end];
        
        if (charIndexMap.has(char)) {
            // If the current character is already in the substring, update the start index
            start = Math.max(start, charIndexMap.get(char) + 1);
        }
        
        // Update the length of the current substring
        maxLength = Math.max(maxLength, end - start + 1);
        
        // Update the index of the current character in the map
        charIndexMap.set(char, end);
    }
    
    return maxLength;
}

3)3 rd gighest number in unsorted array.
    
