const returnFirstTwoDrivers = drivers => drivers.slice(0,2)

const returnLastTwoDrivers = drivers => drivers.slice(2,4)

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(integer) {
    return function (fare) {
        return integer * fare
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers (drivers, driversFunction) {
        return driversFunction(drivers)
}