const fs=require('fs');
const http=require('http');
const server=http.createServer();
const fsPromises = require('fs').promises;



server.on("request",(req,res)=>{

    let then = new Date;


    //stream
    const rStream=fs.createReadStream('text.txt');
    rStream.on("data",(chunk)=>{
        res.write(chunk);
    });


    //sync
    const syncData=fs.readFileSync('text.txt','utf-8');
    res.write(syncData);


    //async
    fs.readFile('text.txt','utf-8',(err,data)=>{
        res.write(data);
    });

    
    //Promise
    if(req.url=='/promise'){
    (async () => {
        const data = await fs.promises.readFile('text.txt', 'utf8');
        res.write(data);
      })();
    }

    let now = new Date;
    console.log(now - then);
})


server.listen(8000);



