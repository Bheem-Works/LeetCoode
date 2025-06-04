// Memoize function
function memoize(fn) {
    const cache = {}; // Yo object le arguments ko combination ra tesko result store garera rakchha

    return function(...args) {
        const key = JSON.stringify(args); // arguments lai JSON string ma convert garera key banauchha

        if (key in cache) {
            // yadi tyo key pahile nai store bhako cha bhane, direct result return garchha
            console.log(`Returning from cache for ${key}`);
            return cache[key];
        }

        // naya key ko lagi original function call garchha ani teslai cache ma store garchha
        console.log(`Calculating result for ${key}`);
        cache[key] = fn(...args);

        return cache[key];
    }
}

// Example: Slow addition function
function slowAdd(a, b) {
    // Let's pretend yo heavy calculation ho
    console.log(`Adding ${a} and ${b}`);
    return a + b;
}

// Memoize gareko version
const fastAdd = memoize(slowAdd);

// Testing the memoized function
console.log(fastAdd(2, 3)); // pahilo patak calculate garchha
console.log(fastAdd(2, 3)); // dosro patak cache bata result dinchha
console.log(fastAdd(4, 5)); // naya calculation garchha
console.log(fastAdd(4, 5)); // cache bata result dinchha
