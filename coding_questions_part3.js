1)Find non duplicates
const arr = [5, 2, 2, 3, 5, 6, 3, 7];
const nonDuplicates = [];

for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i])) {
        nonDuplicates.push(arr[i]);
    }
}

console.log(nonDuplicates); // Output: [6, 7]

