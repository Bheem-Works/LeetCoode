    // Give a arrays of a function [f1,f2,f3,f4,f5] return a new function fn that is the function composition of the arrays functions.
    /**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {

    return function(x) {
        for(const fn of functions.reverse()){
            x = fn(x);
        }
        return x;
    }
};

  const fn = compose([x => x + 1, x => 2 * x])
  console.log(fn(2)); // 9

  // once again 

  var composeFunction = function(functions){
    return function(x) {
        for(const fn of functions.reverse()){
            x = fn(x);
            console.log('x',x);
        }
        return x;
    }
  }

  const lfn = composeFunction([x => x + 1, x => 2 *x]);
  console.log(lfn(3)); 