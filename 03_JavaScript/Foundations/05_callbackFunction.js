//-----CALLBACK
//A callback function is:
//a function that is passsed into another function as a parameter then invoked by that other function

//A higher order function is:
//a function that accept a callback as parameter

//Example1
function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn(); //Callback function is invoked
    console.log("CAllback has been invoked");
}

higherOrder(callback);

//Example2
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name){
    return name.toUpperCase();
}

greet("Tim", upperCaseName);
