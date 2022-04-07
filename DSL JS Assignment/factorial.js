
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your  number?`, num1 => {
    console.log(` number is  ${num1}!`)

    factorial(num1);
    function factorial()
    {
    if (num1 < 0) {
      console.log('Error! Factorial for negative number does not exist.');
  }
  
  // if number is 0
  else if (num1 === 0) {
      console.log(`The factorial of ${num1} is 1.`);
  }
  
  // if number is positive
  else {
      let fact = 1;
      for (i = 1; i <= num1; i++) 
      {
          fact *= i;
      }
      console.log(`The factorial of ${num1} is ${fact}.`);
  }
        readline.close()
}
  })
  