let drivers = ["Antonia", "Nuru", "Amari", "Mo"];

const returnFirstTwoDrivers = (drivers) => drivers.slice(0,2);

const returnLastTwoDrivers = (drivers) => drivers.slice(-2);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (num) => {
    return function(fareMultiplier) {
        return (num * fareMultiplier);
    };
};

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(returnFirstTwoDrivers, x) {
    return x(returnFirstTwoDrivers);
}