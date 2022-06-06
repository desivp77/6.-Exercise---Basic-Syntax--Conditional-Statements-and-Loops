// Write a function that displays numbers from given start to given end and their sum. The input comes as two number parameters. Print the result like the examples below:

function printAndSum(startNum, endNum){
    
    let sum = 0;
    let printLine = '' ;
 
    for (let currentNum = startNum; currentNum <= endNum; currentNum++ ) {
        sum += currentNum;

        if (currentNum === endNum) {
            printLine += `${currentNum} `;
        } else {
            printLine += `${currentNum} `;
        }
    }

    console.log(printLine);
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);
printAndSum(0, 26);
printAndSum(50, 60);