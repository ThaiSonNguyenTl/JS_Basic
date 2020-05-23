var items = ['Tom' , 'Bill' , 'Maria']
// cach 1 
// items.reduce(fuction(currentString,item) {
//   return currentString + '<' item + '>'
// } , '')
// cach 2
// items.map(function(item) {
//   return '<' + item + '>'
// }).join('')

var numbers = [1 , 3 , 5 , 9 , 7]
var squareNumbers = numbers.map(function(number){
    return number * number
})
console.log(squareNumbers)