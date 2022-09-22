const fs=require('fs');
let op=process.argv[2];
let a = process.argv[3];
let b = process.argv[4];

switch(op){
    case "read" : const content=fs.readFileSync(a,{encoding:'utf-8'}); console.log(content);  break;
    case "append" : fs.appendFileSync(b,a);   break;
    case "delete" : fs.unlinkSync(a);  break;
    case "create" : fs.writeFileSync(a,"Hello");  break;
    case "rename" : fs.renameSync(a,b);  break;
    case "list" : console.log(__filename);  break;
    
}