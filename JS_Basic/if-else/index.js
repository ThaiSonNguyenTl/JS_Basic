// toss coin
// function tossCoin() {
//     value = Math.random()
//     if(value < 0.5) {
//         console.log('Mat Sap');
//     } else{
//         console.log('Mat Ngua');
//     }
// }
// tossCoin()

function countBills(bills){
    var total = 0
    for(var bills of bills){
        if(!bills.fake){
            total += bills.value
        } else{
            console.log(' OMG this money is fake !')
            console.log(bills)
            break;
        }
    }
    return total
}

var bills = [
    {value: 10000 },
    {value: 20000 },
    {value: 50000 },
    {value: 500000 , fake: true }
    ]

var total = countBills(bills)
console.log(total)