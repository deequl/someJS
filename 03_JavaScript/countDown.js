function countDown(time){
   
    var IntervalID = setInterval(function(){
        console.log("Timer: ", time)
        time--;
        if(time==0){console.log("Ring Ring Ring!!!"); clearInterval(IntervalID)}

    }, 1000)
}