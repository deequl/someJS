//setTimeout:
//           A function that asynchronously invokes a
//           callback after a delay in milliseconds
//
//Example1
function callback() {
    console.log("callback function");
}
var delay = 2000; //in ms
setTimeout(callback, delay);

//Example2 -> Canceling setTimeout
var timerId = setTimeout(function(){
    console.log("This functions runs in 30 seconds");
}, 30000);

setTimeout(function(){
    console.log("Canceling the first setTimeout", timerId)
    clearTimeout(timerId);
}, 2000)

//setInterval:
//            A function continually invokes a callback after
//            every X milliseconds, where X is provided to setIinterval
//
//Example1
function callback(){
    console.log("callback is called continuously");
}
var repeat = 3000; //in ms
setInterval(callback, repeat);

//Example2 -> Canceling setInterval
var num = 0;
var intervalId = setInterval(function(){
    num++;
    console.log('num: ', num);
    if (num === 3) {
        clearInterval(intervalId);
    }
}, 1000)