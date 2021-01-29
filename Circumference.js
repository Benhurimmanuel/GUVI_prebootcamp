const readline = require('readline');
const inp = readline.createInterface({
	input: process.stdin
});
const userInput = [];
inp.on("line",
	(data) => {
		userInput.push(data);

	});
inp.on("close", () => { 
    
   
    //start-here
if(userInput>0)
{
    var l= userInput*2*22/7;
    console.log(l.toFixed(2));
}
else
{
 console.log("error");  
}
    //end-here
   
});