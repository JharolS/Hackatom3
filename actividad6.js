function makeCounter() {
    //instead of:
    let count = 0;
    function counter() {
        return counter.count++;
        function set(value) {
            return set.count = value;
        }
        function decrease() {
            return decrease.count--;
        }
    };
    counter.count = 0;
    return counter;
} 
let counter = makeCounter();
console.log(counter)