
//How to get the rest of the array by using ("Spread opperator"  ...variable)
const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

const [firstAnimal, secondAnimal, ...restOfAnimals] = animals;
// console.log(firstAnimal)
// console.log(secondAnimal)
// console.log(restOfAnimals)
// console.log(" ");


const person = {
    firstName: 'Bob',
    lastName: 'Marley',
    email: 'bob@marley.com',
    password: 'sekureP@ssw0rd9',
    username: 'barley',
    addresses: [
        {
            address: '1600 Pennsylvania Avenue',
            city: 'Washington, D.C.',
            zipcode: '20500',
        },
        {
            address: '221B Baker St.',
            city: 'London',
            zipcode: 'WC2N 5DU',
        }
    ],
    createdAt: 1543945177623
};

let { email, password, ...restOfInfo } = person;
// console.log(email);
// console.log(password);
// console.log(restOfInfo);

//How to copy the object
let { ...personCopy } = person;

person.firstName = "Brian";
person.lastName = "Rice";
console.log(person);
console.log(personCopy);