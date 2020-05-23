// npm : node package manage
var readlineSync = require('readline-sync');

// wait for use's respone
// var username = readlineSync.question('May I have your name?')
// console.log('Hi ' + username + ' !')

// var favfood = readlineSync.question('what is your favorite food ? ', {
//     hideEchoBack: true
// });
// console.log('Oh Mr ' +username +' love ' +favfood + ' =))');


// animals = ['Lion', 'Elephant', 'Crocodile', 'Giraffe', 'Hippo'],
// index = readlineSync.keyInSelect(animals, 'Which animal?');
// console.log('Ok, ' + animals[index] + ' goes to your room.');

var pet = {}
var name = readlineSync.question('What is your pet? ')
var gender = readlineSync.question('Pet gender (Male/Female)? ')
var weight = readlineSync.question('Weight: ')

pet.name = name;
pet.gender = gender;
pet.weight = parseInt(weight);

console.log(pet)
