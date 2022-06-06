function vacation(number,people,day){
    //students price
    priceForStudentsFriday = 8.45;
    priceForStudentsSaturday = 9.8;
    priceForStudentsSunday = 10.46;
    //business price
    priceForBusinessFriday = 10.9;
    priceForBusinessSaturday = 15.6;
    priceForBusinessSunday = 16;
    //regular price
    priceForRegularFriday = 15;
    priceForRegularSaturday = 20;
    priceForRegularSunday = 22.5;
    //discount
    studentsDiscount = 0.85;
    regularDiscount = 0.95;
    //
    price = 0;
 
    if ( day == `Friday`){
        switch(people){
            case `Students`:
                if(number >= 30){
                    price = (number * priceForStudentsFriday) * studentsDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForStudentsFriday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Business`:
                if (number >= 100){
                    price =(number * priceForBusinessFriday) - (10 * priceForBusinessFriday);
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForBusinessFriday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Regular`:
                if ( number >= 10 && number <= 20){
                    price = (number * priceForRegularFriday) * regularDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForRegularFriday
                    console.log(`Total price: ${price.toFixed(2)}`);
                }break;
        }
    }else if ( day == `Saturday`){
        switch(people){
            case `Students`:
                if(number >= 30){
                    price = (number * priceForStudentsSaturday) * studentsDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForStudentsSaturday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Business`:
                if (number >= 100){
                    price =(number * priceForBusinessSaturday) - (10 * priceForBusinessSaturday);
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForBusinessSaturday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Regular`:
                if ( number >= 10 && number <= 20){
                    price = (number * priceForRegularSaturday) * regularDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForRegularSaturday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }break;
        }
 
    }else if (day == `Sunday`){
        switch(people){
            case `Students`:
                if(number >= 30){
                    price = (number * priceForStudentsSunday) * studentsDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForStudentsSunday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Business`:
                if (number >= 100){
                    price =(number * priceForBusinessSunday) - (10 * priceForBusinessSunday);
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForBusinessSunday;
                    console.log(`Total price: ${price.toFixed(2)}`);
                } break;
            case `Regular`:
                if ( number >= 10 && number <= 20){
                    price = (number * priceForRegularSunday) * regularDiscount;
                    console.log(`Total price: ${price.toFixed(2)}`);
                }else {
                    price = number * priceForRegularSunday
                    console.log(`Total price: ${price.toFixed(2)}`);
                }break;
        }
    }
 
}