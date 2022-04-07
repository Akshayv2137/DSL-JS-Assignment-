/*
@
@@@
@@@@@
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    
       /* 
        at1="@"
       // at1= parseInt(at)
        pyramid(num1);
        function pyramid(num1)
        {
        for(i=1;i<=num1;i+2)
        {
            temp=at1*i     
            console.log(temp);
            }
            console.log("\n");
        }
        */
        
        Triangle(num1);
        
        function Triangle() {
            var width = (2 * num1) -1; // Always the case.
            var midpoint = Math.floor(width / 2); // Middle of pyramid.
            let level = ''; // will be reset each level loop
        
            for(var i = 0; i < num1; i++) { // Looping through levels
                level = '';
                for(var j = 0; j < width; j++) {
                    if(j < midpoint-i || j > midpoint+i) {
                        level += '.';
                    } else {
                        level += '@';
                    }
                }
                console.log(level);
            }
        }
        readline.close()
        
  })     
  