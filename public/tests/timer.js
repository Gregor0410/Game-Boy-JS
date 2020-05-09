function timeFunction(func){
    let startTime = Date.now();
    //run function 1 thousand times
    for(let i = 0;i<1000000;i++){
        func();
    }
    return ((Date.now() - startTime)/1000000)/1000 * 4194304 //return average time in number of gb clock cycles
}