const findTheOldest = function(people) {
    return people.reduce( (oldest, person) => {
        let oldestDeath = oldest.yearOfDeath ?? new Date().getFullYear();
        let personDeath = person.yearOfDeath ?? new Date().getFullYear();

        let oldestAge = oldestDeath - oldest.yearOfBirth;
        let personAge = personDeath - person.yearOfBirth;

        /*
        console.log(`old: ${oldestAge} : cur: ${personAge}`);
        console.log(person);
        */

        return oldestAge > personAge ? oldest : person;
    });
};


const people = [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]

console.log( findTheOldest(people) );

// Do not edit below this line
module.exports = findTheOldest;
