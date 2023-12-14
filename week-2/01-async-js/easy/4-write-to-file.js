const fs=require("fs");
let writeData="Hey There!!";
fs.writeFile("test.txt", writeData,function(err){
    if(err) console.log(err);
    fs.readFile("test.txt", "utf-8",function(err,data){
        console.log(data);
    })
})