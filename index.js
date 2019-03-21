// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    let newDriver = drivers
    const anonymousFunction = function(drivers) {
       let newDriver2 = drivers.slice(0,2)
       newDriver= newDriver2
    }
    anonymousFunction(newDriver)
    return newDriver
}

const returnLastTwoDrivers = function(drivers) {
    let newDriver = drivers
    const anonymousFunction = function(drivers) {
       let newDriver2 = drivers.slice(2)
       newDriver= newDriver2
    }
    anonymousFunction(newDriver)
    return newDriver
}

const selectingDrivers = [ returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(number1) {
    console.log(number1)
    const anonymousFunction = function(number2) {
        console.log(number2)

        let answer
        answer = number1*number2

        console.log(answer)
        return answer

    }
     return anonymousFunction
}

function fareDoubler(number) {
 const multiply = createFareMultiplier(2)
 return multiply(number)
}

function fareTripler(number) {
    const multiply = createFareMultiplier(3)
    return multiply(number)
   }

function fetchSpecifiedDrivers(arrayOfDrivers, function1) {
    return function1(arrayOfDrivers)
}