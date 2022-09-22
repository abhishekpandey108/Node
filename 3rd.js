const express = require('express');
const fs=require('fs');
const app = express();
const path=require('path');
const dirpath=path.join(__dirname,'node_modules')



const arr=[];
app.get('',(req, res)=> {
  //res.sendFile(path.join(__dirname, '/index.html'));
  
     fs.readdir(dirpath,(err,files)=>{
        files.forEach((item)=>{
            console.log(`<li>${item}</li>`);
            arr.push(item);
        });
        JSON.stringify(arr)
        res.send(`
        <div><a href="/public">public</a></div>
            <br/>${arr}
        `);
    });
    
  
});

app.get('/public',(req, res)=> {
    //res.sendFile(path.join(__dirname, '/index.html'));
    res.send(`
    <div><a href="/">Home</a></div>
        <h1>Public Page</h1>
    `)
  });

app.listen(8080);
console.log('Server started at http://localhost:' + 8080);