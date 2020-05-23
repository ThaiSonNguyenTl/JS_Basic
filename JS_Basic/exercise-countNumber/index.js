function countFrom(a,b){
    return new Promise(function(resolve,reject){
        var intervalId = setInterval(function(){
            console.log(a)
            a++
            if ( a === b + 1){
                clearInterval(intervalId)
                resolve();
            } 
        },1000)
    })
}

countFrom(3,5).then(function(){
    console.log('done')
})