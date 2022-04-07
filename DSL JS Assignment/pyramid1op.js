/*
1
12
123
1234
12345
*/

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your number?`, num1 => {
    console.log(` number is  ${num1}!`)
    
    generatePyramid(num1)
    function generatePyramid() {
     
      var output = '';
      for (var i = 1; i <= num1; i++) {
          for (var j = 1; j <= i; j++) {
              output += j + '  ';
          }
          console.log(output);
          output = '';
      }
  }
        readline.close()
        
  })

  