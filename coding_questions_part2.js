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

