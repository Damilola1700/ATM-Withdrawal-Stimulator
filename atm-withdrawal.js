let balance = 10000;
let WithdrawAmount = document.getElementById("WriteAmount");
let output = document.getElementById("messageDisplay");

 function withdrawHere() {
  if (WithdrawAmount.value === "") {

    output.innerHTML = " Kindly input your amount";
    
  } else if (isNaN(WithdrawAmount.value)) {

    output.innerHTML = "Input amount in number";
   
  } else if (WithdrawAmount <= 0 ) {

    output.innerHTML = "Input a valid number"

  } else if ( WithdrawAmount.value < 1000 ) {

   
    output.innerHTML = "Minimum withdrawal is 1000" ;
    
  } else if (WithdrawAmount.value <= balance) {

    balance -= WithdrawAmount.value;
    output.innerHTML = `Withdrawal Successful! Your available balance is ${balance}`;
   
  } else {

    output.innerHTML = "Insufficient Funds";
    
  }

    output.classList.remove("hidden");

}







