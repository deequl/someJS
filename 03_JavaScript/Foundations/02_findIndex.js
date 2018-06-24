//findIndex
//Returns the index of the first element in the array
//for witch the callback returns a truthy value. -1 is
//returned if the callback never returns a truthy value.

//Example1 -> return = 2
var arr = [3,4,6,2,1];
findIndex(arr, function(num, index, array){
    return num === 6;
})

//Example2
function findIndex(arr, callback) {
    for(var i = 0; i < arr.length; i++){
        if (callback(arr[i], i, arr)){
            return i;
        }
    }
    return -1;
}