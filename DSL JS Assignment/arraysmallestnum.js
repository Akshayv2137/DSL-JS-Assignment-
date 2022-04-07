
const readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
readline.question(`How many element you want in array => `, num2 => 
{
    console.log(` Element is  ${num2}!`)
    console.log(` Enter array`)

      var matrix = [];
      var nbr = 0;
      num1=num2-1
      
      readline.on('line', (line) => 
      {
      matrix.push(line.split(' '));
      nbr++;

    // number of lines to read
    arraysmall(matrix); 
    function arraysmall()
    {
    if (nbr > num1)
    {
        readline.close();
        console.log("Array is ",matrix);
       
        //console.log(matrix[1]);

       
            
		var smallest = matrix[0];

		for(var i=1; i<matrix.length; i++)
        {
			if(matrix[i] < smallest)
            {
                smallest = matrix[i];
			}
		}
        console.log("Smallest element is ",smallest);
        
    }
}
   
});

});
