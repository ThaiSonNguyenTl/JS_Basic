var fs = require('fs');

// Cach Khoi tao Promise
// Tao ham , tra ve Promise , goi resolve va reject 
function readFilePromise(path) {
    return new Promise(function(resolve , reject) {
        fs.readFile(path, {encoding: 'utf8'} , function(err,data) {
            if(err){
                reject(err);
            } else{
                resolve(data);
            }
        });
    });
}
// Cach dung 
// .then 
// .catch
readFilePromise('./song.txt')
    .then(function(song1) {
        console.log(song1)
    })
    .catch(function(error){
        console.log(error)
    });