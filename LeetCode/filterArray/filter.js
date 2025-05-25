/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
  let result = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])){
        result.push(arr[i]);
    }
  }  
  return result;
};

function greaterThen(n) {
    return n > 20;
} 
console.log(filter([10,20,40,50,60],greaterThen))