//You will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

//For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possiblites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

//Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//sudo:
//select one index in an array
//formed by picking 1 element PER array FROM subArray
//count how many uniqueArrs we can make
//return uniqueArrs


let arrArrs = [[1,2],[4],[5,6]]
function solve(arr) {
  console.log(arrArrs[1][0])
  // return 0;
};

solve([[1,2],[4],[5,6]]) // = 4
