const fs = require('fs');

const inputs = fs
  .readFileSync('./input.txt', 'utf-8')
  .split(/\n/)
  .map(line => line.trim())
  .filter(Boolean)
  .map(Number);

const sum = values => values.reduce((acc, value) => acc + value, 0);

const getFuel = mass => Math.floor(mass / 3) - 2;

const getTotalFuel = values => sum(values.map(getFuel));

const getRecursiveFuel = mass => {
  const fuelMass = getFuel(mass);
  return fuelMass > 0 ? fuelMass + getRecursiveFuel(fuelMass) : 0;
};

const getTotalRecursiveFuel = values => sum(values.map(getRecursiveFuel));

console.log('----Part One----');
const totalFuel = getTotalFuel(inputs);
console.log(`total: ${totalFuel}`);

console.log('----Part Two----');
const totalRecursiveFuel = getTotalRecursiveFuel(inputs);
console.log(`total: ${totalRecursiveFuel}`);
