//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//sudo code:
//iterate through numsArray
//square each number || index
//gng to use to .map() to get a new array w/ sqRoot values
//add those values together and return them

const numsArray = [2,4,6]//[1, 2, 2]
let result = numsArray.map(index => index ** 2)
console.log(result)

let sum = result.reduce(function(index, addValue){
       return index + addValue
   }, 0)

   console.log(sum)
