// You will receive a number as a parameter. Print the 10 times table for this number. See the examples below for more information.

function multiplicationTable(num){

    for (let currentNumber = 1; currentNumber <= num; currentNumber++ ) {
        console.log(`${num} X ${currentNumber} = ${num * currentNumber}`); 
    }

}

multiplicationTable(5);
multiplicationTable(2);