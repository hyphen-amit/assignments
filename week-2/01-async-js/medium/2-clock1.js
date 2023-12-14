setInterval(function(){
    let date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let am_pm=hours<12 ? "AM" : "PM";
    let currentTime=`${hours}:${minutes}:${seconds}:${am_pm}`;
    console.log(currentTime);
},1000);