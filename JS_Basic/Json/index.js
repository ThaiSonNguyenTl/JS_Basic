/* JSON object 
1.stringify : Convert an object to a Json string
2. parse : Convert a Json string to an object   */

var myDog = {
    name: 'fox',
    age : 1,
    dead : false
}
var myDogString = JSON.stringify(myDog);
console.log(myDogString);

var myCatString = '{ "name": "Tom","age": 1, "dead": true}'

var myCat = JSON.parse(myCatString);
console.log(myCat);
