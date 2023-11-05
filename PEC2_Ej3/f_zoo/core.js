const data = require('./data');

function entryCalculator(entrants) {
  if (entrants === undefined) {
    return 0
  } else if (Object.keys(entrants).length === 0) {
    return 0;
  } else {
    // const numberOfPeople = Object.values(entrants);
    const people = Object.values(entrants);
    const prices = Object.values(data.prices);
    const finalprices = [];
    people.map((quantity, i) => {
      prices.forEach((price, index) => {
        if (i == index) {
          finalprices.push(quantity * price);
        }
      })
    })
    // no pasa el último test, creo que el precio total es equivocado en el archivo core.spec.js
    return finalprices.reduce((a, b) => a + b);
  }
}

function schedule(dayName) {
  let finalSchedule;

  const schedule = {
    Tuesday: 'Open from 8am until 6pm',
    Wednesday: 'Open from 8am until 6pm',
    Thursday: 'Open from 10am until 8pm',
    Friday: 'Open from 10am until 8pm',
    Saturday: 'Open from 8am until 10pm',
    Sunday: 'Open from 8am until 8pm',
    Monday: 'CLOSED'
  }

  if (dayName === undefined) {
    return schedule
  } else {
    Object.keys(schedule).map(day => {
      if (day === dayName) {
        finalSchedule = {
          [dayName]: schedule[dayName]
        }
      }
    });
    return finalSchedule;
  }
}

function animalCount(species) {
  let animalCount;
  if (species !== undefined) {
   data.animals.map(animal => {
      if (animal.name === species) {
        animalCount = animal.residents.length 
      }
    });
    return animalCount
  }
}

// function animalMap(options) {
//   // console.log('options', options);
//   // your code here
// }

// function animalPopularity(rating) {
//   // your code here
// }

// function animalsByIds(ids) {
//   // your code here
// }

// function animalByName(animalName) {
//   // your code here
// }

// function employeesByIds(ids) {
//   // your code here
// }

// function employeeByName(employeeName) {
//   // your code here
// }

// function managersForEmployee(idOrName) {
//   // your code here
// }

// function employeeCoverage(idOrName) {
//   // your code here
// }

module.exports = {
  entryCalculator,
  schedule,
  animalCount,
  // animalMap,
  // animalPopularity,
  // animalsByIds,
  // animalByName,
  // employeesByIds,
  // employeeByName,
  // managersForEmployee,
  // employeeCoverage
};
