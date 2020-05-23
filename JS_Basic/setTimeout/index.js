// setTimeout
// clearTimeout =>  function setTimeout will return a Id , You want to Cancel use clearTimeout .
// setTimeout(fn,ms) function , miliseconds => wait milisecond then do function


// console.log('start')
// setTimeout(function(){
//     console.log('wait 1s ...')
// },1000)
// console.log('finish')


function done(){
    console.log('wait 1s...')
}
console.log('start')
var timeoutId = setTimeout(done,1000)
console.log('finish')
clearTimeout(timeoutId)
