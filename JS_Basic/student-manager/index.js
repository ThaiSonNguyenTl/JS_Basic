var fs = require('fs');
var readlineSync = require('readline-sync');



var students = [];
// load data from file JSON.parse then save variable array students
function loadData(){
    var fileContent = fs.readFileSync('./data.json')
    students = JSON.parse(fileContent)
}

function showMenu(){
    console.log('1. Show all students');
    console.log('2. Create new a student.');
    console.log('3. Save and Exit.');
    var option = readlineSync.question('Enter your option: ');
    switch(option){
        case '1':
            showStudents();
            showMenu();
            break;
        case '2':
            showCreateStudent();
            showMenu();
            break;
        case '3':
            saveAndExit();
            break;
        default:
            console.log('You entered wrong option !');
            showMenu();
            break;
    }
}

function showStudents(){
    for(var student of students){
        console.log(student.name , student.age);
    }
}

function showCreateStudent(){
    var name = readlineSync.question('Enter your name: ')
    var age = readlineSync.question('Enter age: ')
    var student = {
        name: name,
        age: age
    };
    students.push(student)
}

function saveAndExit(){
    // convert students to string for save data.json
    var content = JSON.stringify(students)
    fs.writeFileSync('./data.json', content);
}


function main() {
    loadData();
    showMenu()
}
main()