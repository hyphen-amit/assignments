const fs=require('fs');
fs.readFile("test2.txt","utf-8",function(err,data){
    let fileData=data;
    fileData=fileData.split(' ').filter((singleWord) => singleWord.length > 0).join(' ');
    fs.writeFile("test2.txt",fileData,function(err){
        if(err) console.log(err);
    })
    console.log(fileData);
})