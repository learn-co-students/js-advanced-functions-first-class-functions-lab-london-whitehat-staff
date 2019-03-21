// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) =>{ 
return drivers.slice(0, 2)
}

const returnLastTwoDrivers = (drivers) =>{ 
    return drivers.slice(drivers.length -2)
    }

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]



const createFareMultiplier = (int) => (fare) => {
 return fare * 5
 fareDoubler(fare)
}

const fareDoubler = (int) => {
 return int *2
   }

   const fareTripler = (int) => {
    return int *3
      }

     const fetchSpecifiedDrivers = (drivers, func) => {
         return func(drivers)
     }