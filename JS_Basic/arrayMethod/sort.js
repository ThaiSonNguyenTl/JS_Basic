/* if sort function
    1. return a value < 0
        a will come before b
    2. return a value > 0 
        a will come after b 
    3. return 0
        a and b will stay unchanged   */

var numbers = [1,4,5,3,2,9]
var ascendingOrder =  numbers.sort(function(a,b){
    // assume : a = 1 b = 4 
    // expect: [1,2,3,4,5,9]
    return a - b
})
console.log(ascendingOrder)