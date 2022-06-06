// Write a function that returns the English name of the last digit of a given number. Write a program that receives a number and prints the returned value from this function.

function englishName(num){
    let lastDigit = num;
    let lastDigit2Str = String(lastDigit).slice(-1);

    if (lastDigit2Str === '1') {
        console.log(`one`);
    }

    else if (lastDigit2Str === '2') {
        console.log(`two`);
    } 

    else if (lastDigit2Str === '3') {
        console.log(`three`);
    } 

    else if (lastDigit2Str === '4') {
        console.log(`four`);
    } 

    else if (lastDigit2Str === '5') {
        console.log(`five`);
    } 

    else if (lastDigit2Str === '6') {
        console.log(`six`);
    } 

    else if (lastDigit2Str === '7') {
        console.log(`seven`);
    } 

    else if (lastDigit2Str === '8') {
        console.log(`eight`);
    } 

    else if (lastDigit2Str === '9') {
        console.log(`nine`);
    } 
 
    else {
        console.log(`error`);
    } 

}

englishName(512);
englishName(1);
englishName(1643);
englishName(514);
englishName(5);
englishName(1646);