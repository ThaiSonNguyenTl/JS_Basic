var orders = [
    {name: 'A', quantity: 2 , unitPrice: 100,},
    {name: 'B', quantity: 4 , unitPrice: 400,},
    {name: 'C', quantity: 1 , unitPrice: 100,},
  ]
  // cach 1
  var total = orders.reduce(function(currentTotal,product){
    return currentTotal + product.quantity*product.unitPrice
  },0)
  console.log(total)
  // cach 2
  // var priceOrder = orders.map(function(x){
  //  return x.quantity* x.unitPrice
  // })
  // console.log(priceOrder)
  // var total = priceOrder.reduce(function(a,b) {
  //   return a+ b
  // })
  // console.log(total)