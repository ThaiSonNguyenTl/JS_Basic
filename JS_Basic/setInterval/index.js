// setInterval
// clearInterval
// setInterval(fn, ms) => cu sau moi ms no se thuc hien ham

var i = 0
// var intervalId = setInterval(() => {
//     i+=1
//     console.log(i)
//     if ( i === 5){
//         clearInterval(intervalId);
//     }
// }, 1000);

var intervalId = setInterval(function() {
    ++i;
    console.log(i);
    if(i === 5){
        clearInterval(intervalId)
    }
},1000)