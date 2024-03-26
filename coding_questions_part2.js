// 1)Given a 2D square matrix, find the sum of elements in Principal and Secondary diagonals. For example, consider the following 4 X 4 input matrix.

// Input : 
// 4
// 1 2 3 4
// 4 3 2 1
// 7 8 9 6
// 6 5 4 3
// Output :
// Principal Diagonal: 16
// Secondary Diagonal: 20

// Input :
// 3
// 1 1 1
// 1 1 1
// 1 1 1
// Output :
// Principal Diagonal: 3
// Secondary Diagonal: 3
const MAX = 100;
 function printDiagonalSums(mat, n)
{
    let principal = 0, secondary = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
 
            // Condition for principal diagonal
            if (i == j)
                principal += mat[i][j];
 
            // Condition for secondary diagonal
            if ((i + j) == (n - 1))
                secondary += mat[i][j];
        }
    }
 
    console.log("Principal Diagonal:" + principal );
    console.log("Secondary Diagonal:" + secondary );
}
 
// Driver code
    let a = [ [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ],
                    [ 1, 2, 3, 4 ], [ 5, 6, 7, 8 ] ];
    printDiagonalSums(a, 4);

// 2)    
const data = [{
    Group: 'A',
    Name: 'SD'
}, {
    Group: 'B',
    Name: 'FI'
}, {
    Group: 'A',
    Name: 'FI'
}, {
    Group: 'B',
    Name: 'FI'
}];
// Output should be SD and FI;
//soultion 
const output = [...new Set(data.map(item => item.Name))];
console.log(output);
//Find Unique values output should be SD


var dat1=data.map((item)=>item.Name)
var uniqueValue = dat1.filter(i => dat1.filter(j => i === j).length === 1);
// console.log(uniqueValue)


3)Second highest number
function findSecondHighest(arr) {
    let firstHighest = -Infinity;
    let secondHighest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstHighest) {
            secondHighest = firstHighest;
            firstHighest = arr[i];
        } else if (arr[i] > secondHighest && arr[i] !== firstHighest) {
            secondHighest = arr[i];
        }
    }

    return secondHighest;
}

4)
function findTriplets(arr, target) {
    const triplets = [];
    arr.sort((a, b) => a - b); // Sort the array to use two-pointer approach

    for (let i = 0; i < arr.length - 2; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            const sum = arr[i] + arr[left] + arr[right];
            if (sum === target) {
                triplets.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;
            } else if (sum < target) {
                left++;
            } else {
                right--;
            }
        }
    }

    return triplets;
}

// Example usage:
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target = 15;
const result = findTriplets(arr, target);
console.log(result); // Output triplets that sum up to 15

