const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your  number?`, function (num1) {
       
        squarecube(num1);
        function squarecube()
        {
        var square = (+num1) * (+num1);
        var cube = square*num1;
        //return result
       console.log(`The square of ${num1} is ${square}`);
       console.log(`The cube of ${num1} is ${cube}`);
        }
        readline.close()
        
  })

  