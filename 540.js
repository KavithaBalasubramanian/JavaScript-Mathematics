//You are given a number ‘n’. You have to tell whether a number is great or not. A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back

m+j=n



const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

//const userInput = [];

inp.on("line", (Data) => {
  // var inputData = Data.split(" ");
    var n =parseInt(Data);
    var temp = n;
    var sum = 0;
    var prod = 1;
  while ((parseInt(n))>0)
  {
    var m=n%10;
    n=n/10;
    sum = sum+parseInt(m);
    prod = prod*parseInt(m);
  }
  
  var c = sum + prod;
  
  if(c===temp)
  console.log("Great")
  else 
  console.log("not Great")
  
  
});
