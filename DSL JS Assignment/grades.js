const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  })
  
  readline.question(`Enter Math Subject marks`, num1 => {
    console.log(`Math subject marks is  ${num1}!`)
    

    readline.question(`Enter History Subject marks`, num2 => {
        console.log(`History subject marks is  ${num2}!`)
    
        readline.question(`Enter Science Subject marks`, num3 => {
            console.log(`Science subject marks is  ${num3}!`)
       
            sum=0;

            
        grade(num1,num2,num3);
        function grade()
        {
        var sum = (+num1) + (+num2) + (+num3);
        console.log(`sum of all subject is  ${sum}!`)
        avg=sum/3;
        console.log(`average of subject is  ${avg}!`)
        
        if (avg>=60)
                console.log('Grade A');

            else if (avg<60 && avg >=50)
                  console.log('Grade B');
            else if (avg<50 && avg >=40)
                  console.log('Grade C');

            else
                  console.log('Grade F');
        }
        readline.close()
    })
        
  })
})
  