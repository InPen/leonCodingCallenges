//You will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

//For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//sudo:
//Get the all arrays in an array.
//Recursion is used to solve the problem. The base condition is, When the length of the array reduces to one then return that element of the array. Else
//Call recursion after leaving the first element of the array and store the result in variable(otherCases).
//Loop through every element of the Array(otherCases) and inside every element loop through the first element of the Array(arr).
//Concatenate every element of the Array(arr[0]) with the Array(otherCases) and push the result in answer array.

function solve(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    let comboArr = []
// recur with the rest of the array.
    let otherCases = solve(arr.slice(1));
    for (let i = 0; i < otherCases.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      comboArr.push(arr[0][j] + otherCases[i]);
    }
  }
  return comboArr
}
}

solve([[1,2],[4],[5,6]]) // = 4
