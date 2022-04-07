/*
 @
@@@
@@@@@
@@@
 @
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    
        
        Triangle(num1);
        
        function Triangle() {
          
            let string = "";
            // Upside pyramid
            for (let i = 1; i <= num1; i++) {
              // printing spaces
              for (let j = num1; j > i; j--) {
                string += " ";
              }
              // printing @
              for (let k = 0; k < i * 2 - 1; k++) {
                string += "@";
              }
              string += "\n";
            }
            // downside pyramid
            for (let i = 1; i <= num1 - 1; i++) {
              // printing spaces
              for (let j = 0; j < i; j++) {
                string += " ";
              }
              // printing @
              for (let k = (num1 - i) * 2 - 1; k > 0; k--) {
                string += "@";
              }
              string += "\n";
            }
            console.log(string);
        readline.close()
        }
  })
      
  