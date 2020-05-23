/* Caculate bus ticket fee 
  - if age < 15 discount 20%
  - if age > 60 discount 10%
  - otherwise 10000/ticket */
function getTicketFee(person){
    var baseCount = 10000
    if(person.age < 15){
        return baseCount * 0.8;
    } else if ( person.age > 60){
        return baseCount * 0.9;
    } else{
        return baseCount;
    }
   
}

var person = {name: 'Bruce' , age : 79}
var fee = getTicketFee(person)
console.log(fee);