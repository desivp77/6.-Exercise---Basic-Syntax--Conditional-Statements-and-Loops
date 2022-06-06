// Write a JS function that calculates the date of the next day by given year, month, and day.
// The input comes as three number parameters. The first element is the year, the second is the month and the third is the day.
// The output should be returned as a result of your function.


// function nextDay(num1, num2, num3){
//     let today = new Date(num1, num2, num3);
//     let year = today.getFullYear(num1); 
//     let month = today.getMonth(num2);
//     let day = today.getDay(num3);

//     let nextDay = `${year}-${month}-${day}`;
//     console.log(nextDay);

// }

function nextDay(year, month, day){ 
    let date = new Date(year, month - 1, day); 
    let tomorrow = new Date(year, month - 1, date.getDate()+1); 
    console.log(`${tomorrow.getFullYear()}-${tomorrow.getMonth()+1}-${tomorrow.getDate()}`); 
    } 

nextDay(2016, 9, 30);
nextDay(2020, 3, 24);
