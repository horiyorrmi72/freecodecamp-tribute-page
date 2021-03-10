/*
In this challenge, you will test your knowledge of conditionals.

THE PROBLEM:
Banks often charge a fee for a transfer depending on what kind of transfer it is. Typically, transfers within the same bank is free, transfers between local banks have a small fee, and international transfers have the highest fee.

Your challenge is to complete the code below to correctly update a customer's balance after deducting the transfer amount and fee. You should also throw an error 'insufficient balance' if the customer does not have enough balance.

*/

// Don't touch the next line, we will cover functions later.
function updateBalance(currentBalance, transferAmount, transferType) {
  // currentBalance is a variable with a number value, it contains the customer's current balance.
  // transferAmount is a variable with a number value, it contans the amount being transfered.
  // transferType is a variable with a string value, it can be one of the following 'SAME_BANK', 'LOCAL', 'I18N'
  // when transferType is 'SAME_BANK', the transfer fee is 0.
  // when transferType is 'LOCAL', the transfer fee is 1% i.e 0.01
  // when transferTYPE is 'I18N', the transfer fee is 4% i.e 0.04
  // You should not redeclare or update these 3 variables (currentBalance, transferAmount, transferType)

  let fee;
  let newBalance;

  // HINT: First determine the fee. Then check that the current balance is greater than the transfer amount + fee
  // i.e (1+fee) * transferAmount, otherwise throw 'insufficient balance' error.

  // YOUR CODE HERE. (~approximately 15 lines)

if (transferType =='SAME_BANK') {
  fee = 0;
  } else if (transferType =='LOCAL') {
  fee = 0.01;
  } else if (transferType =='I18N') {
  fee = 0.04;
  } ;

if(currentBalance > transferAmount){
newBalance = currentBalance - ((1 + fee) * transferAmount);
} else {
return 'insufficient balance';
}
   
  return newBalance // DON'T UPDATE THIS LINE
}
// THIS IS FOR YOUR TESTING ONLY.
console.log(updateBalance(5000, 4800, 'SAME_BANK')) // should print 200
console.log(updateBalance(5000, 4800, 'I18N')) // should print 8
console.log(updateBalance(5000, 4800, 'LOCAL')) // should print 152
try {
  updateBalance(5000, 6000, 'LOCAL') // should throw error 'insufficient balance'
} catch (er) {
  console.log(er);
  }