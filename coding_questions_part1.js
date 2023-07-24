
//1)code to remove duplicates from array
var array2=[1,4,3,2,4,5,5,6];
for(let i=0;i<array2.length;i++){
    while(array2.includes(array2[i],i+1)){
        var index=array2.indexOf(array2[i],i+1)
        array2.splice(index,1)
    }
}
console.log(array2)



//2)write a code to flaten an array
var array4=[[1,2,3],[[1,6,7]]];
var output=[];
function flaten(array4){
    for(let item of array4){
        if(Array.isArray(item)){
            flaten(item)
        }else{
            output.push(item)
        }    
    }
}
flaten(array4);
console.log(output)


//3)Write a code to get sum of pairs from an array for an target
var target=10;
var sumarray=[1,9,5,5,3,7,9];
var outputpairs=[];

function findtarget(sumarray,target){
    for(let i =0;i<sumarray.length;i++){
        var diff=target-sumarray[i];
        if(sumarray.includes(diff,i+1)){
            outputpairs.push([sumarray[i],diff])
        }

    }
}
findtarget(sumarray,target)
console.log(outputpairs);



//4)Flatten this object

const data = {
    name: 'Xoriant',
    place: 'Mumbai',
    address: {
      city: 'Mumbai',
      geo: {
        lat: '40.5897200',
        long: '49.6686100'
      },
      country: 'India'
    }
  };

function flattenObject(obj, parentKey = '') {
    let flattenedObject = {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let newKey = parentKey ? `${parentKey}.${key}` : key;
        if (typeof obj[key] === 'object' && obj[key] !== null) {
          Object.assign(flattenedObject, flattenObject(obj[key], newKey));
        } else {
          flattenedObject[newKey] = obj[key];
        }
      }
    }
  
    return flattenedObject;
  }
  
  // Usage:
  
  const flattenedData = flattenObject(data);
  console.log(flattenedData);


//4)Pythgoars triplet example?
function findPythagoreanTriplets(arr) {
  const triplets = [];

  // Generate combinations of three numbers
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const a = arr[i];
        const b = arr[j];
        const c = arr[k];

        // Check if it's a Pythagorean triplet
        if (a * a + b * b === c * c) {
          triplets.push([a, b, c]);
        }
      }
    }
  }

  return triplets;
}

// // Example usage:
const arr = [3, 4, 5, 6, 8, 10, 12, 15];
const triplets = findPythagoreanTriplets(arr);
console.log(triplets);



//5)Best Time to Buy and Sell Stock
// Example 1:

// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.



var prices = [7,1,5,3,6,4];
const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  
console.log(maxProfit(prices))



