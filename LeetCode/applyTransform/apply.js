    var map = function (arr,fn) {
        let result = [];
        for(let i = 0; i < arr.length; i++) {
            const mana = result.push(fn(arr[i],i));
            console.log('mana',mana);
        }
        return result;
    }

    function plusOne (n)  {return n + 1};
    console.log(map([1,2,3],plusOne));