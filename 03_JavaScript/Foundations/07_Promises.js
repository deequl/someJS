//Promises
//A promise is an object that represents a task
//that will be completed in the future

var p1 = new Promise(function(resolve, reject) {
    var num = Math.random();
    if(num<0.5) {
        resolve(num)
    } else {
        reject(num);
    }
})

p1.then(function(data){
    console.log("Promise p1 resolved with data:", data);
}).catch(function(data){
    console.log("Promise p1 was rejected with data:", data);
})

//Example2
var promise = new Promise(function(resolve, reject) {
    var randomInt =  setTimeout(() => {
        var randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt)
    }, 4000);
});

promise.then(function(data){
    console.log("Random int passed to resolve:", data);
});

//Promises Chaining
