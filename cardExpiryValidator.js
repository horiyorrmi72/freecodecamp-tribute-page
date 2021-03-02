const form = document.getElementById('form');
const expiryMonth = document.getElementById('expiryMonth');
const expiryYear = document.getElementById('expiryYear');

form.addEventListener('submit', ev => {
  ev.preventDefault();
  
  const month = expiryMonth.value;
  const year = expiryYear.value;
  
  // Create a date object from month and year, on the first
  // of that month. You could check the end of the month
  // but that would be a little more complicated as you'd need
  // to know how many days are in that month.
  const expiryDate = new Date(year + '-' + month + '-01');
  
  // You can compare date objects, this says if the expiryDate is
  // less than todays date, i.e. in the past. You could do <= if
  // you want to check whether they're the same date aswell.
  if (expiryDate < new Date()) {
    // Fails validation, show some error message to user
    console.log('fail')
  } else {
    // Valid expiry
    console.log('pass')
  }
})