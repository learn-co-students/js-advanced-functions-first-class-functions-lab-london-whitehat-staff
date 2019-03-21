// Code your solution in this file!
const returnFirstTwoDrivers = drivers => {
  return drivers.slice(0,2);
}

const returnLastTwoDrivers = drivers => {
  return drivers.slice((drivers.length - 2));
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = multiplier => {
  return function(multiplier2) {
    return (multiplier * multiplier2);
  } 
}

const fareDoubler = fare => {
  return fare*2;
}

const fareTripler = fare => {
  return fare*3;
}

const fetchSpecifiedDrivers = (drivers, functiona) => {
  return functiona(drivers);
}