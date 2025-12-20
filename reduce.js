const prices = [2,3,4,5,6];
const total = prices.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);