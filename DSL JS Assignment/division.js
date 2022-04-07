const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`What's your first number?`, num1 => {
    console.log(`first number is  ${num1}!`)
    //readline.close()

    readline.question(`What's your second number?`, num2 => {
        console.log(`second number is  ${num2}!`)

function div() 
{
    if(num2>0)
    {

    var ans=num1/num2;
    console.log({ans})
    return ans;
   
    }
    console.log('Enter Postive divisor',{num2})
}
div(num1,num2)
})
})
