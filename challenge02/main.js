//Given two arrays of strings, return the number of times each string of the second array appears in the first array.

//sudo
//compare the second array to first array
//return numberOfTimes string from 2nd array appear in the first


array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
array2 = ['abc', 'cde', 'uap']

function solve(a,b){
  for(let i=0;i<array1.length;i++)
   if(array2[i]!=array1[i])
    return "False"
    return "True"
  }
  // return []; //[2, 1, 0]

solve(array1, array2)
