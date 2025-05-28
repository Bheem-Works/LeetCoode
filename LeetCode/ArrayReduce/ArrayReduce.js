//Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.

// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.

// If the length of the array is 0, the function should return init.

// Please solve it without using the built-in Array.reduce method.

// [1,2,3,4]
// function sum(accum, curr) { return accum + curr; }
// 0
// [1,2,3,4]
// function sum(accum, curr) { return accum + curr * curr; }
// 100
// []
// function sum(accum, curr) { return 0; }
// 25

    /**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}l
 */
    var reduce = function(nums, fn, init) {
        let total = init;
        console.log('init',total);
        for(let i = 0; i < nums.length; i++) {
            total = fn(total,nums[i]); 
        }
        return total;
    };
console.log(reduce([1,2,3,4], (acc, curr) => acc + curr, 0)); // 10
console.log(reduce([1,2,3,4], (acc, curr) => acc + curr * curr, 100)); // 130
console.log(reduce([], (acc, curr) => 0, 25)); // 25

