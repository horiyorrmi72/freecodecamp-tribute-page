// you are given a function speedLimit with (speed&threshold) parameters
// if the limit should be 80mph(miles per hour);
// you are to check if the driving exceeded the treshold given 
// if exceeded you are to ticket the the driver (fine the driver)
// if 'true' you are to return 'yes' and 'no' if otherwise
function speedLimit(speed, threshold){
    const limit = 80;
    const maxSpeed = limit + (threshold * limit);
var ticket = speed >= maxSpeed?'yes':'no';
return ticket;
}
console.log(speedLimit(700,0.1));
// CODE EXPLANATION
// getting the maximum speed = limit + (threshold*limit)
// to know if you are to ticket the car/ driver,
// check if speed is higher than or equals maxSpeed,
// using tenary operator to check and return the result.