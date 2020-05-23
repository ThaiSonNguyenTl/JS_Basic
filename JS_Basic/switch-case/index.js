/* Syntax: 
    switch(expression){
        case value1:
            //do something
            break;
        case value2: 
            //do something
            break;
        ...
        default: 
            //do something
            break; 
    } 
*/
/* bronze , silver, gold , diamond
    discount: 
    bronze : 2%
    silver: 5% 
    gold : 8%
    diamond: 10%
 */

// var memberCard = {
//     tier: 'silver'
// }

// function getTotal(price,card){
//     var discountRate;
//     switch(card.tier) {
//         case 'bronze':
//             discountRate = 0.02;
//             break;
//         case 'silver':
//             discountRate = 0.05;
//             break;
//         case 'gold':
//             discountRate = 0.08;
//             break;
//         default:
//             discountRate = 0.1;
//             break;
//     } 
    // if(card.tier === 'bronze'){
    //     discountRate = 0.02;
    // } else if (card.tier === 'silver'){
    //     discountRate = 0.05;
    // } else{
    //     discountRate = 0.1;
    // }
//     return price * (1-discountRate);
// } 
// var total = getTotal(500000,memberCard)
// console.log(total)

var trafficeLight = 'yellow'

function goOrNotInVietnam(lightValue){
    switch(lightValue) {
        case 'red':
            console.log('Fuck you! Stop')
            break;
        // case 'green':
        //     console.log('Go away...')
        //     break;
        // case 'yellow':
        //     console.log('Go away...')
        //     break;

        // case green and yellow has the same action 
        case 'green':
        case 'yellow':
            console.log('Go away...')
            break;
    }
}
goOrNotInVietnam(trafficeLight)