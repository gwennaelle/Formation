// then / catch
//------------------------------------------------

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


// async /await
//------------------------------------------------
async function callMyPromise(){
    try{
        const result = await new Promise(function(resove, reject){
            setTimeout(() => {
                resolve('ok')
            }, 2000);
        })
        console.log(result)
        console.log('fin asynchrone')
    } catch (error){
        console.error(error);
    }
}

callMyPromise()
console.log('fin sync')