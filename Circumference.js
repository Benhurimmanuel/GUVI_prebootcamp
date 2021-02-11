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



https://docs.google.com/document/d/14J5-zcQjXSNunyUqrXZz50skGX_XxB3IE0b_ilK-Pw4/edit










Write a code to get the input in the given format and print the output in the given format.

Input Description:
First-line indicates two integers which are the size of array and 'K' value. Second-line indicates an integer contains elements of an array.

Output Description:
Print the taken input in the same format.

Sample Input :
5 3
1 2 3 4 5
Sample Output :
5 3
1 2 3 4 5