//Given 3 numbers A,B,C print 'yes' if they can form the sides of a scalene triangle else print 'no'.
Input Size : A,B,C <= 100000


const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (Data) => {
    var inputData = Data.split(" ");
    var a =parseInt(inputData[0]);
    var b =parseInt(inputData[1]);
    var c =parseInt(inputData[2]);
    
  if(((a*a)+(b*b)==(c*c))||((a*a)+(c*c)==(b*b))||((b*b)+(a*a)==(c*c)))
  {
  console.log("yes");
  }
  else
  {
    console.log("no");
  }
});
    
