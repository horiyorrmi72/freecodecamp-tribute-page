function countOnline(usersObj) {
    // Only change code below this line
    let numberOfUsers = 0;
  for (let users in usersObj){
    if(usersObj[users].online === true){
      numberOfUsers++;
    }
  }
  return numberOfUsers;
    // Only change code above this line
  }
  console.log(countOnline());