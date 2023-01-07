// JAVASCRIPT PRACTICE
//
// INSTRUCTIONS
// This practice problem set is divided into sections. After each problem,
// add a new line and write your code.

// declarations
//
// declare a variable called myStr and set it to any string you want

const myStr = "hello world!"
// declare a variable called myNum and assign it to any number you want
const myNum = 45
// declare a variable called myArr and assign it to any array you want
const myArr = ["this", "array", "works"]
// declare a variable called myObj and assign it to any object you want
const myObj = {
    mykey: "cool",
    mykey2: "super cool",
    mykey3: "super super cool"
}

// strings
//
// what is the length of myStr?
myStr.length
// add an exclamation point to the end of myStr
myStr += "!"
// console.log the second character of myStr
console.log(myStr[1])
// remove the first character of myStr
myStr.slice(1)

// numbers
//
// use three different syntaxes/operators to add 1 to your number, updating the value in myNum
myNum = myNum+1
myNum = myNum++
/**
 * `addOne` returns the given number incremented by one.
 * @param {number} num 
 */
function addOne (num){
    return num + 1
}
addOne(myNum);

// declare a variable myAbs equal to the absolute value of your number (hint: Math.abs())
const myAbs = Math.abs(myNum)

// declare a variable myArea equal to 3.14 * (myAbs ** 2)
const myArea = 3.14 * (myAbs ** 2)

// declare a variable myHeight equal to a random number between 4 and 10
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const myHeight = getRandomArbitrary(4,10);

// declare a variable myVolume equal to myArea * myHeight
const myVolume = myArea * myHeight

// arrays
//
// add three elements to the end of your array
myArr.push("el1", "el2", "el3")

// remove two elements from the beginning of your array
myArr.shift()
myArr.shift()

// add one element to the beginning of your array
myArr.unshift(34)

// remove one element from the end of your array
myArr.pop()

// objects
//
// make example objects to represent:
//// libraryCard - a library cardholder's account
const libraryCard = {
    name: "Cardholder's name",
    zipcode: "99361",
    cardID: "1232-1239-1923-1093",
    pin: "4109"  
}

//// brunch - a brunch menu
const brunch = {
    coffee: {
        espresso: "cortado",
        espresso: "latte",
    },
    eggType: {
        scrambled: "soft",
        other: "hard-boiled"
    }
}

//// car - information about a car
const car = {
    mileage: "300000",
    color: "red",
    license: "019-13-899K"
}
//// vacation - itinerary/details about your dream vacation
const vacation = {
    destination: "Spain",
    travelMethod: "Plane",
    budget: "unlimited",
    airline: "United"
}

// functions/loops
//
// console.log each of the values in myArr
console.log(myArr.values)

// make a function arrayMaker that accepts a number n and returns an array containing all the integers from 1 to n
function arrayMaker (n) {
    let arr = []
    for (let i =0; i<=n; i++){
        arr.push(i)
    }
    return arr;
}

// call your arrayMaker with a big number. Sum the values in the array it returns
const bigArr = arrayMaker(1000);
function sumNums (arr){
    let sum = 0
    for (const num of arr){
        sum +=num
    }
    return sum;
}