/*This are questions where you need to find output and explain the output of snippet.
Please run each snippet seperately to understand it better
*/


//1)
(async () => {
    try {
        var x = 21;
        var test = function () {
            console.log(x);
            let x = 20;
        };
        test();
    } catch (e) {
        console.log(e)
    }


    //output: ReferenceError: Cannot access 'x' before initialization
    //As we define let and its scope is block and hositing of let is in temporary dead zone that we can't access before initialization.

})();





//2) What will the output with explanation:
(async () => {


    setTimeout(() => {
        console.log("In zero timeout")
    }, 0)

    const c = "hi";
    process.nextTick(() => {
        console.log("In process nexttick ")

    })

    var value = await new Promise((resolve, reject) => {

        resolve("resolve")

    })
    setImmediate(() => {
        // run something
        console.log("set immediate")

    });
    console.log(value)

    for (let i = 0; i < 10; i++) {
        console.log(i)
    }

    for (let i = 0; i < 10; i++) {
        setTimeout(() => {

            console.log(i, "")

        }, 0)
    }
    console.log(c)
    /*
    1)In process nexttick=> process.nextTick will 
    2)resolve-> Beacuse we are using await to get the result so after await is executed other things will be executed.
    3)0 to 9 values -> as it is for loop and will work synchronous
    4)hi-> 
    5)In zero timeout -> Though it is first line of code with 0 settimeout but still it will executed by DOM apis and its async operation.
    6)0 to 9 ->Again settimeout in for loop it will be aync
    
    Note:set immediate we can't exactly tell when will it run as depends upon which phaze event loop is running.
    It runs in check phaze with respect to nodejs event loop.
    Though within an i/o cycle we can gurantee that it will run before setTimeout .
     Read this:https://nodejs.org/en/docs/guides/event-loop-timers-and-nexttick ->setImmediate() vs setTimeout()
    What will be output
    timeout_vs_immediate.js
    (async () => {
        const fs = require('fs');
    
        fs.readFile(__filename, () => {
          setTimeout(() => {
            console.log('timeout'); 
          }, 0);
          setImmediate(() => {
            console.log('immediate');
          });
        });
        
        The main advantage to using setImmediate() over setTimeout() is setImmediate() 
        will always be executed before any timers if scheduled within an I/O cycle, 
        independently of how many timers are present.
    
        If we run the following script which is not within an I/O cycle (i.e. the main module), 
        the order in which the two timers are executed is non-deterministic, as it is bound by the performance of the process:
         For ex:
         setTimeout(() => {
            console.log('timeout');
          }, 0);
    
          setImmediate(() => {
          console.log('immediate');
          });
    
    */



})();


    //3) What will be output:
    (async () => {
        function display1() {
            return {
                hello: "world"
            };
        }
        function display2() {
            return
            {
                hello: "world2"
            };
        }

        console.log(display1())//Hello :world

        console.log(display2())
        /*undefined as code is not reachable.
        The "rule" is automatic semicolon insertion.
        return is a valid statement all on its own, so it is treated as a complete statement. The code starting on the next line is also syntactically valid (although it's not interpreted as an object at all in this case, but rather a code block containing a label and a single "statement" that consists of a string literal). So automatic semicolon insertion kicks in here and the two are treated as separate statements.
        The code that starts on the line after the return is simply ignored.*/

    })();



//4) What will be output:
(async () => {

    var p=t=10;
    console.log(p,t)//output will be p and t will be 10;
})()
console.log(t)//this will be 10 outside scope means global scope.Means  t will be global variable but not p.
/*
There is also a downside in multiple assignment,
 in that the secondary variables become globals, 
 and you don't want to leak into the global namespace.
*/

5) console.log(typeof typeof 1)// output -> string

6)
console.log('1') 
function demoFunction() {
setTimeout(() => {
      console.log('2')
   }, 0)
}
 
 const promise = new Promise((resolve, reject) => {
 console.log('3')
 resolve('promise result')
 })
 
 demoFunction()
 
 promise.then(() => {
  console.log('4')
 })
  console.log('5');
output
//1
//3
//5
//4
//2

7)[1,2]+[3,4] in js
Ans:
In JavaScript, when you try to use the + operator between two arrays like [1,2] + [3,4], it does not perform array concatenation as you might expect. Instead, it performs array-to-string conversion and then concatenates the resulting strings. Here's what happens:

The arrays [1,2] and [3,4] are converted to strings by calling their toString() method. This results in the strings "1,2" and "3,4" respectively.
The + operator then concatenates these strings, resulting in "1,2" + "3,4", which gives "1,23,4".

8)
var a=10;

function b(){
console.log(a);
var a=20
}
b();
Ans:
var a = 10;

function b() {
    var a; // declaration is hoisted
    console.log(a); // undefined, because the assignment hasn't happened yet
    a = 20; // assignment happens here
}
b();

9)
In JavaScript, NaN (Not a Number) is a special value that represents an unrepresentable value resulting from an invalid mathematical operation. Interestingly, NaN is not equal to itself according to the equality operator (==). So, when you run the code snippet:

javascript
Copy code
if (NaN == NaN) {
    console.log("true");
} else {
    console.log("else");
}
It will actually log "else" to the console. This behavior might seem counterintuitive at first, but it's consistent with the IEEE 754 floating point standard, which defines NaN values as not equal to each other. To check if a value is NaN in JavaScript, you can use the isNaN() function.


