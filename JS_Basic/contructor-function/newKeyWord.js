// create a new object .Object Literal 
// var mouse = {
//     weight: 0.2,
//     getWeight: function() {
//         return this.weight;
//     }
// }
// console.log(mouse.getWeight())

// contructor function
// function Mouse(color,weight){
//     this.tyle = 'mouse';
//     this.color = color;
//     this.weight = weight;
// }
// mouse1 = new Mouse('black',2)
// mouse2 = new Mouse('white',3)
// console.log(mouse1,mouse2)

// exercise
var Tom = {
    name: 'Tom',
    stomach: [],
    eat: function(mouse) {
        this.stomach.push(mouse);
        return this;
    }
}
// contructor function
function Mouse(name){
    this.name = name;
}
mouse1 = new Mouse('m1')
mouse2 = new Mouse('m2')
mouse3 = new Mouse('m3')

var tomEat = Tom.eat(mouse1).eat(mouse2).eat(mouse3)
// console.log(tomEat)


// Prototype in js 
// Prototype object is SHARED among all the objects created using `new`
function Mouse(color,weight){
    this.tyle = 'mouse';
    this.color = color;
    this.weight = weight;
}
// Mouse.prototype.contructor === Mouse => return true
Mouse.prototype.sleep = function(){
    console.log('Sleeping....')
}
var jerry = new Mouse('yellow',15)
var mickey = new Mouse('black',30)
// console.log(jerry.sleep() === mickey.sleep() )



