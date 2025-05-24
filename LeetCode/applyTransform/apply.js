    var map  = function (arr,fn) {
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            result.push(fn(arr[i],i));
        }
        return result;
    }

    function onePlus(n) {return n + 1};
    console.log(map([1,2,3],onePlus));