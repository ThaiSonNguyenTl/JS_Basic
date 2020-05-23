var Mouse = require('./mouse')  // must the same
var cat = require('./cat')

var jerry = new Mouse('yellow') // must the same 
var tom = new cat()
console.log(jerry)
tom.eat(jerry)
console.log(tom)