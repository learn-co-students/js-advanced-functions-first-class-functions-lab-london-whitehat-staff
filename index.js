// Code your solution in this file!

const returnFirstTwoDrivers = (drivers) => {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = (drivers) => {
  return drivers.slice(2);
}

const selectingDrivers = [
  returnFirstTwoDrivers,
  returnLastTwoDrivers
];

function createFareMultiplier(timesValue) {
  return function(anotherValue){
    return timesValue * anotherValue;
  }
}

//this function above takes in one number, then takes in another using nested function, now the inside function is able to use the two arguments to manipulate.

const fareDoubler = createFareMultiplier(2);

//this works within createFareMultiplier because as long as the (2) has been passed, it will do value * 2.

const fareTripler = createFareMultiplier(3);

function fetchSpecifiedDrivers(drivers, fn) {
   return fn(drivers);
}

//fn is representing whichever function is being passed to it from the test. 
//fn = whateverTheTestWantsToPassThrough or both first/last drivers.



