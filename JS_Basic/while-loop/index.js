/* 
    syntax :
    while(condition){
        // dosomething
    } 
*/
// for(var i = 1 ; i <= 10 ; i ++) {
//     console.log(i)
// }

// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

/* 
    syntax:
    do{
        //do something
    }while(condition)
*/ 

var i = 1
do {
    var even = i % 2
    if(even === 0){
        console.log(i)
    }
    i++
}while(i <= 10)