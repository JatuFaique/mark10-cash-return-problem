var billAmount = document.querySelector('#bill-amount');
var cashGiven = document.querySelector('#cash-given');
var checkBtn = document.querySelector('#submit-btn');
var message =document.querySelector("#error-message")

var noOfNotes = document.querySelectorAll('.no-of-notes')

const availableNotes = [2000,500,100,20,10,5,1];


function calculateChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length;i++){
        const numberofNotes = Math.trunc(
            amountToBeReturned/availableNotes[i]
        );
        amountToBeReturned %= availableNotes[i]
        noOfNotes[i].innerText = numberofNotes;
    }

}



checkBtn.addEventListener('click', function validateBillandCash() {
    message.style.display = 'none'
    if(Number(billAmount.value) >= 0) {
        if(Number(cashGiven.value) >= Number(billAmount.value)){
            const amountToBeReturned = Number(cashGiven.value) - Number(billAmount.value);
            console.log('Return remaining amount',amountToBeReturned)
            calculateChange(amountToBeReturned);
        } else{
            message.style.display='block';
            message.innerHTML = " Wash Dishes"
        }

    } else{
        showMessage("Invalid Amount")
    }
});

function showMessage(message1){
        message.style.display = 'block';
        message.innerHTML = message1;
}



console.log(cashGiven.value)