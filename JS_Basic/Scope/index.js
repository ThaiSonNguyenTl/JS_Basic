// scopes: 
// global scope
// local scope

var a  = 5 // global scope 
function  random(){
    var b = Math.random() // local scope 
    a = 6// can change variable global in local
    console.log(b)
}

function doSomeThing(){
    a = 10
}
// console.log(b)  => error
random()
doSomeThing()

console.log(a)
// trong lap trinh han che 
// thay doi dau vao => ta phai biendoi de ra 1 cai dau ra khac ma ko anh huong den dau vao 
function doSomeThings(x){
    var b = Math.random();
    console.log(b * x);
}
// thay doi scope 1 cai bien 
// ko nen thay doi a nhu tren @@ vi sau nay he thong se lon => tao 1 bien khac thay doi
function random(x){
    var y = Math.random()
    console.log(y * x)
}
var z = random(a)