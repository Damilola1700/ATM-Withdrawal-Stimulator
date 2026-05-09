let balance = 10000;
let WithdrawAmount = document.getElementById("WriteAmount");
let output = document.getElementById("messageDisplay");

function withdrawHere() {
  if (WithdrawAmount.value === "") {
    output.innerHTML = " Kindly input your amount";
    output.classList.remove("hidden");
    return;
  }

  if (WithdrawAmount.value <= balance) {
    balance -= WithdrawAmount.value;
    output.innerHTML = `Withdrawal Successful! Your available balance is ${balance}`;
    output.classList.remove("hidden");
  } else {
    output.innerHTML = "Insufficient Funds";
  }

  if (WithdrawAmount.value < 1000 && balance > 0) {
    output.innerHTML = "Minimum withdrawal is 1000";
    output.classList.remove("hidden");
  }
}
