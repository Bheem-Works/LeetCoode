
    // The function can be store in the object and the arrays. 
    // We can call the another function through out this process.
    
    function expect(value) {
        return {
            toBe: function (otherValue) {
                if(value === otherValue) return true;
                throw new Error("Not Equal");
            },
            notToBe: function (otherValue) {
                if(value !== otherValue) return true;
                throw new Error("Equal");
            }
        }
    }
    console.log(expect(3).toBe(3));