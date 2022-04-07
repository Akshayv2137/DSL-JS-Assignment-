const { equal } = require('assert');
const { timeStamp } = require('console');

const readline = require('readline').createInterface
({
    input: process.stdin,
    output: process.stdout
})
readline.question(`How many element you want in array => `, num2 => 
{
    console.log(` you enter  ${num2}!`)
    console.log(` Enter array`)

      var matrix = [];
      var nbr = 0;
      num1=num2-1
      
      readline.on('line', (line) => 
      {
      matrix.push(line.split(' '));
      nbr++;

    // number of lines to read
    
    if (nbr > num1)
    {
        readline.close();
        console.log("Array is ",matrix);

        sortArray(matrix); 
        function sortArray(array) {
            var temp = 0;
            for (var i = 0; i < array.length; i++) {
              for (var j = i; j < array.length; j++) {
                if (array[j] > array[i]) {
                  temp = array[j];
                  array[j] = array[i];
                  array[i] = temp;
                }
              }
            }
            console.log('short is',array)
           // return array;
          }
          
    }
   
});

});
