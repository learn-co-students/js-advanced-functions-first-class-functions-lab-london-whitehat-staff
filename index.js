// Code your solution in this file!
function returnFirstTwoDrivers(arr) {
  return arr.slice(0, 2)
}

function returnLastTwoDrivers(arr) {
  return arr.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(multiplier) {
  return function(n) {
    return n * multiplier
  }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(arrOfDrivers, cb) {
  return cb(arrOfDrivers)
}