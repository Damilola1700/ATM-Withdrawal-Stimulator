The Aim of this project is to create an ATM Withdrawal Stimulator using Javascript function.

My step by step procedure to achieve this

1. Created my files,both HTML and JS 
2. linked my Javascript to my HTML file
3. Styled my interface using tailwind css
4. I declared my variables,which includes user balance, user input and the pop up message after a transaction.
5. Creates a function named withdrawHere,This runs when user clicks withdraw button.
6. My first IF statement to validate, it displays a message telling the user to enter an amount before they can proceed.
   The second IF statement, checks if the entered amount is greater than the available balance,and it displays the insufficient funds message.
   The third IF statement, checks if the entered amount is less than or equal to the balance,and displays a success message also shows the remaining balance after withdrawal.
   The last IF statement,Checks if the entered amount is less than 1000, displays a message that the least amount allowed for withdrawal is 1000.
7. "classlist.remove" is a JS function that allows the background colour only show when the message comes up.