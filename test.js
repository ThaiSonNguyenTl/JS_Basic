// function create2dArr(x,y) {
//     var arr = [];
//     for(var i = 0; i < y; i++) {
//         arr.Push(Array(x).fill(0));
//     }
//     return arr; 
// }

function createArray(x, y) {
    return Array.apply(null, Array(x)).map(function(e) {
        return Array(y);
    });
}
var x =  createArray(4,5)
console.log(x)