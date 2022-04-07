const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your base value?`, num1 => {
    console.log(`first number is  ${num1}!`)
    //readline.close()

    readline.question(`What's your height value?`, num2 => {
        console.log(`second number is  ${num2}!`)
       
        area(num1,num2);
        function area()
        {
        var area = ((+num1) * (+num2))/2;
        //return result
       console.log(`The area of tringle is ${area}`);
        }
        readline.close()
        
  })
})
  