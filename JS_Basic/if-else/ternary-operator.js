/* ternary operator 
syntax : 
condition ? expression when true : expression when false */
function tossCoin(){
    var value = Math.random();
    var result = (value < 0.5) ? 'Mat Sap' : 'Mat Ngua' ;
    console.log(result)
}
tossCoin()