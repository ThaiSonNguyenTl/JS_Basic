var classes = [
    {
        id: 0,
        className: '1A',
        teacher: 0,
    },
    {
        id: 1,
        className: '2A',
        teacher: 1,
    },
    {
        id: 2,
        className: '3A',
        teacher: 2,
    },
    {
        id: 3,
        className: '4A',
        teacher: 3,
    },
    {
        id: 4,
        className: '5A',
        teacher: 4, // id of teacher
    },

]
var students = [
    {
        id: 0 , 
        name: 'son',
        height: 172,
        class: 0  // id of classes
    },
    {
        id: 1 ,
        name: 'tuan',
        height: 172,
        class: 0 // id of classes
    },
    {
        id: 2 ,
        name: 'tho',
        height: 172,
        class: 0 // id of classes
    },
    {
        id: 3 ,
        name: 'khanh',
        height: 172,
        class: 1 // id of classes
    }, 
    {
        id: 4,
        name: 'tien',
        height: 172,
        class: 1 // id of classes
    },

]
var teacher = [
    {
        id: 0,
        name: 'Bruce',
        age: 79
    },
    {
        id: 1,
        name: 'JCVD',
        age: 70
    },
    {
        id: 2,
        name: 'me',
        age: 22
    },
    {
        id: 3,
        name: 'boyka',
        age: 43
    },
    {
        id: 4,
        name: 'sottadkins',
        age: 44
    },
]

function getStudentsInClass(nameClass){
    // dau tien phai tim lop do la lop nao . nameClass la lop nao ?
    var classObject = classes.find(function(x){
        return x.className === nameClass;
    })
    var studentsInClass = students.filter(function(student){
        return student.class == classObject.id;
    })
    return studentsInClass;
}

var students = getStudentsInClass('2A'); // expect : display students of class 
console.log(students)