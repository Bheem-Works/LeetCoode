/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let boolean = false;
    
    return function(...args){
        if(!boolean) {
            boolean = true;
            return fn(...args);
    } else {
        return undefined;
    }
    }
};


 let fn = (a,b,c) => (a + b + c)
 let onceFn = once(fn)
 
  console.log(onceFn(1, 2, 3)); // 6

// ❌ Next calls
console.log(onceFn(1, 2, 8)); // false
console.log(onceFn(5, 5, 5)); // false


