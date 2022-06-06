// Write a function, which receives a single number – n, and prints a triangle from 1 to n as in the examples.

function numTriangle(num){

    for (let row = 1; row <= num; row++ ) {
        let printLine = '';

        for ( col = 1; col <= row; col++) {
            printLine+= `${row} `;
        }
        console.log(printLine); 
    }

    
}

numTriangle(3);
numTriangle(5);
numTriangle(2);