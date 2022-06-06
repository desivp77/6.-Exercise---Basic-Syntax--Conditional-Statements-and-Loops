// Receive three numbers and you have to sort them in descending order. Print each number on a new line.


function decendingNumbers(numA, numB, numC){
    
    let array = [numA, numB, numC];
    let highestToLowest = array.sort((a, b) => b-a);
    console.log(highestToLowest.join("\n"));
}

decendingNumbers(2, 1, 3)
decendingNumbers(-2, 1, 3)
decendingNumbers(0, 0, 2)

