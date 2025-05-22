    var counter = function (currentValue) {
        let count = currentValue;

        return{
            increment: function () {
                count++;
                return count;        
            },
            decrement: function () {
                count--;
                return count;
            },
            reset: function () {
                count = 0; 
                return count;
            }
        }
    }

    // var createCounter = counter(3);
    // console.log(createCounter.increment());
    // console.log(createCounter.increment());
    // console.log(createCounter.decrement());
    // console.log(createCounter.reset());

    const init = 4; 
    const call = ["increment","decrement","reset"];
    const initCounter = counter(init);
    const result = call.map(fn => initCounter[fn]());
    console.log(result);