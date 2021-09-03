const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");
var nextButton = document.querySelector("#next-button");
var cashDisplay = document.querySelector(".cash-display")
var tableDisplay= document.querySelector("#table-display")

const availableNotes = [2000 , 500 , 100 , 20 , 10 , 1];

cashDisplay.style.display="none";
tableDisplay.style.display="none";

nextButton.addEventListener("click", function validateBillAmount() {
    hideMessage();
    if(billAmount.value > 0){
        nextButton.style.display = "none";
        cashDisplay.style.display = "block";
        
    }
    else {
        showMessage("Invalid Number");
    }
});

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(cashGiven.value < 0 || billAmount.value < 0) {
        showMessage("Invalid Number!");
        tableDisplay.style.display= "none";
    }
    else if(Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        calculateReturnChange(amountToBeReturned);
    }
    else {
        showMessage("Do you wanna wash plates?");
        tableDisplay.style.display= "none";
    }

});
function calculateReturnChange(amountToBeReturned){


    for(let i=0; i<availableNotes.length; i++){

        const numOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numOfNotes;
        
    }
    tableDisplay.style.display = "block";
  
}


function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}