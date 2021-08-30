var billAmount = document.querySelector("#bill-amount");
var cashgiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");

var availableNotes = [2000 , 500 , 100 , 20 , 10 , 1];

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(billAmount.value > 0) {

        if(cashgiven.value > billAmount.value) {
            var amountToBeReturned = cashgiven.value - billAmount.value;
            calculateChange(amountToBeReturned);

        }
        else if(cashgiven.value === billAmount.value) {
            showMessage("No change is to be given")
        }
        else{
            showMessage("Cash given is less than the Bill Amount")
        }

    }
    else {
        showMessage("Invalid Bill Amount");      
    }
});

function calculateChange(amountToBeReturned) {
    for(let i = 0 ; i < availableNotes.length ; i ++) {
        var numberOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numberOfNotes;

    }
    
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}