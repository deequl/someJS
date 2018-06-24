//-----FOREACH
var arr = [1,2,3,4,5,6]
forEach(arr, function(number) {
    console.log(number*2);
})

//Example1 -> result="my forEach example"
var strings = ["my", "forEach", "example"]
var result = "";
forEach(strings, function(str, index, array) {
    if (array.length - 1 !== index) {
        result += str + " ";
    }else{
        result += str + "!!!";
    }
})

//Example2
function forEach(arr, callback) {
    for(var i= 0; i< arr.length; i++){
        callback(arr[i], i, arr);
    }
}