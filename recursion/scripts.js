function factorial(n){
    if (n === 1) {
        return 1 
    }
    else {
        return n * factorial(n-1)
    }
}

console.log(factorial(5))


// Write a function called sumRange. It will take a number and return the sum of all numbers from 1 up to the number passed in.


function sumRange(n){

    if (n===1){
        return 1
    }
    else {
        return n + sumRange(n-1)
    }
}

alert(sumRange(10))

// Write a function called power which takes in a base and an exponent. If the exponent is 0, return 1.
function power(base, exponent){
    if(exponent === 0) {
        return 1;
    }
    else {
        return base * power(base,exponent-1 )
    }
}

//if we already know the solutio to power(base,exponent-1), we can easily get to it by  multiplying base with it

// Write a function that returns the factorial of a number. As a quick refresher, a factorial of a number is the result of that number multiplied by the number before it, and the number before that number, and so on, until you reach 1. The factorial of 1 is just 1.


// function factorial (n){
//     if (n ===1 ){
//         return n 
//     }
//     else {
//         return n * factorial(n-1)
//     }
// }

// alert(factorial(5))

// //Write a function called all which accepts an array and a callback and returns true if every value in the array returns true when passed as parameter to the callback function

// function all (array, callback){
//     if (array.length === 0 ){
//         return true
//     }

//     if (!callback(array[0])){
//         return false;
//     }

//     return all(array.slice(1), callback)
// }

// alert(all([2,3,5], (x)=>x<3))

// Write a function called productOfArray which takes in an array of numbers and returns the product of them all


function productOfArray(arr){

    let copy = arr.slice()

    if (copy.length === 0 ){
        console.log('running base case')
        return 1
    }

    else return arr[0] * productOfArray(copy.slice(1))


}


var six = productOfArray([1,2,5]) // 6

console.log(six)

// Write a function called contains that searches for a value in a nested object. It returns true if the object contains that value.

function contains(obj, val){
    if(Object.values(obj).includes(val)){
        return true 
    }

    else return contains(obj)
}
