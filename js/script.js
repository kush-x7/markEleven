'use strict';

const dateOfBirth = document.getElementById("date-of-birth");
const luckyNumber = document.getElementById("lucky-number");
const checkNumber = document.getElementById("check-number");
const labelMessage = document.getElementById("label-message");

checkNumber.addEventListener("click", () => {
    let dateValue = dateOfBirth.value;
    let luckyValue = luckyNumber.value;
    let sum = 0;

    dateValue = dateValue.replaceAll("-","");
    
    for(let i=0; i<dateValue.length; i++)
    {
        sum += Number(dateValue[i]);
        labelMessage.textContent= "sum";
    }

    if(Number(luckyValue) <=  0)
    {
        labelMessage.textContent= "Entered number should be greater than 0";
    }
    else if(sum % Number(luckyValue)===0)
    {
        labelMessage.textContent= "Your birthday is lucky😁";
    }
    else
    {
        labelMessage.textContent= "Your birthday is not lucky, so sad🥺";
    }
} );