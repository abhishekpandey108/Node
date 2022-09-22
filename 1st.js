const crypto=require('crypto');
let op=process.argv[2];
let a = Number(process.argv[3]);
let b = Number(process.argv[4]);
switch(op){
    case "add" : console.log(a+b);  break;
    case "sub" : console.log(a-b);  break;
    case "mul" : console.log(a*b);  break;
    case "div" : console.log(a/b);  break;
    case "random" : console.log(crypto.randomInt(0,9));  break;
    case "sin" : console.log(Math.sin(a));  break;
    case "cos" : console.log(Math.cos(a));  break;
    case "tan" : console.log(Math.tan(a));  break;
}