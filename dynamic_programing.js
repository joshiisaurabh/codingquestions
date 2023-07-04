//Problem 1

// Memoization cache to store previously computed Fibonacci numbers
const fibCache = {};

function fibonacci(n) {
  // Base cases for the first two Fibonacci numbers
  if (n === 0) return 0;
  if (n === 1) return 1;

  // Check if the result is already in the cache
  if (fibCache[n]) {
    return fibCache[n];
  }

  // If not in the cache, calculate the Fibonacci number recursively
  const result = fibonacci(n - 1) + fibonacci(n - 2);

  // Store the result in the cache
  fibCache[n] = result;
  console.log(fibCache[n],result,"result storing")

  return result;
}

// Example: Finding the 5th Fibonacci number
const n = 5;
const result = fibonacci(n);
console.log(`The ${n}th Fibonacci number is: ${result}`); // Output: The 5th Fibonacci number is: 5



//Problem 2

function countWaysToReachTop(n) {
    // Base cases for the first few steps
    if (n === 0 || n === 1) {
      return 1;
    }
  
    // Create an array to store the number of ways to reach each step
    const dp = [];
  
    // Initialize the base cases
    dp[0] = 1; // There is only one way to reach step 0 (not taking any step)
    dp[1] = 1; // There is only one way to reach step 1 (taking 1 step)
  
    // Iterate from step 2 up to the target step
    for (let i = 2; i <= n; i++) {
      // Calculate the number of ways to reach the current step
      dp[i] = dp[i - 1] + dp[i - 2];
      // To reach the current step, you can either take 1 step from the previous step (dp[i - 1])
      // or take 2 steps from two steps before (dp[i - 2])
    }
  
    // Return the number of ways to reach the top step
    return dp[n];
  }
  
  // Example usage
  const staircaseSize = 5;
  const waysToReachTop = countWaysToReachTop(staircaseSize);
  console.log(`Number of ways to reach the top of the staircase: ${waysToReachTop}`);
  