new Promise(function (resove, reject){
    setTimeout(() => {
        reject('ko')
    }, 2000);
})
.then(function(result){
    console.log(result)
})
.then(function(){
    console.log('fin programme')
})
.catch(function(error){
    console.log(error)
})

console.log('fin asynchrone');