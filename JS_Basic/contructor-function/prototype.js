// Prototype in js 
// Prototype object is SHARED among all the objects created using `new`
function Mouse(color) {
    this.color = color;
    this.dead = false;
};
Mouse.prototype.die = function() {
    this.dead = true;
};

function Cat(){
    this.stomach = [];
};
Cat.prototype.eat = function(mouse) {
    this.stomach.push(mouse);
    mouse.die();
};
 
var jerry = new Mouse('yellow');
console.log(jerry)
var mickey = new Mouse('black');

var tom = new Cat();
tom.eat(jerry);
tom.eat(mickey)
console.log(tom)