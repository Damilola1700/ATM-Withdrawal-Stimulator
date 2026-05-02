let balance = 10000;
let WithdrawAmount = document.getElementById("WriteAmount");
let output = document.getElementById("messageDisplay");

function withdrawHere() {
  if (WriteAmount.value === "") {
    output.innerHTML = " Kindly input your amount";
    output.classList.remove("hidden");
    return;
    
  }

  if (WithdrawAmount.value > balance){
    output.innerHTML = "Insufficient Funds"
    output.classList.remove("hidden");
  } 

  if (WithdrawAmount.value <= balance){
    output.innerHTML = `Withdrawal Successful! Your available balance is ${balance - WithdrawAmount.value}`;
    output.classList.remove("hidden");
  }

  if (WithdrawAmount.value < 1000 && balance >0 ){
    output.innerHTML = "Minimum withdrawal is 1000";
    output.classList.remove("hidden");
  }
}


