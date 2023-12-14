/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
    return new Promise(function(resolve){
        setTimeout(function (){
            resolve()
        },n*1000);
    });
}

const startTime=new Date().getTime();
wait().then(function(){
    const endTime=new Date().getTime();
    let difference=endTime-startTime;
    return difference;
});

module.exports = wait;
