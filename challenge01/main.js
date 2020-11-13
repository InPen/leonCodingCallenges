//Complete the square sum function so that it squares each number passed into it and then sums the results together.
//For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//sudo code:
//iterate through our array
//square each index
//add every index

let array = [1, 2, 2] // 9

function squareSum(){
  for(let i = 0; i < array.length; i++) {
     sqrdElement = Math.pow(array[i], 2)
     // console.log(sqrdElement)
     for (let numVal of sqrdElement) {
       let sumResults = sqrdElement.reduce((a, b) => a + b, 0)
       console.log(sumResults)
}
  }
}
squareSum(array)
