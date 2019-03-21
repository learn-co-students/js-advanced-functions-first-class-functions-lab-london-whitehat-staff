// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => [drivers[0], drivers[1]]
const returnLastTwoDrivers = (drivers) => drivers.slice(drivers.length-2)
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]
const createFareMultiplier = number => fare => fare*number
const fareDoubler = (createFareMultiplier(2))
const fareTripler = (createFareMultiplier(3))
const fetchSpecifiedDrivers = (drivers, fn) => (fn(drivers))