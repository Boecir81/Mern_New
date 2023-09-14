

// const person = {
//     firstName: 'Bob',
//     lastName: 'Marley',
//     email: 'bob@marley.com',
//     password: 'sekureP@ssw0rd9',
//     username: 'barley',
//     createdAt: 1543945177623
// };



//Old Way
// let bobsFirstName = person.firstName;
// let bobsLastName = person.lastName;
// let bobsEmail = person.email;
// console.log(bobsFirstName, bobsLastName, bobsEmail);


// New ES6 way of doing the above (refered to as DESTRUCTURING)

// let { firstName, lastName, email } = person;
// console.log(firstName, lastName, email);
// console.log(lastName);
// console.log(email);


//Overwriting variable names and changing to what you want
// let { firstName: brianRice, lastName: riceIsCool, email: ricebcom } = person;
// console.log(brianRice, riceIsCool, ricebcom);
// console.log(riceIsCool);
// console.log(ricebcom);


const animals = ['horse', 'dog', 'fish', 'cat', 'bird'];

//Old Way 
// let dog = animals[1];
// let horse = animals[0];
// let bird = animals[4];
// let fish = animals[2];
// let cat = animals[3];

// console.log(dog, horse, bird, fish, cat);
// console.log(dog)
// console.log(horse)
// console.log(bird)
// console.log(fish)
// console.log(cat)

//New way - destructuring from an array
// let [, dog2, fish1, , bird1] = animals;
// console.log(dog2);
// console.log(fish1);
// console.log(bird1);

// let [, , , , bird2] = animals;
// console.log(bird2);

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
        },
        {
            address: '1018 HorseShoe Beend Rd',
            city: 'Aiken',
            state: 'South Carolina',
            zipcode: '29801'
        }
    ],
    createdAt: 1543945177623
};

//Old Way
// let firstAddress = person.addresses[0].address;
// let secCity = person.addresses[1].city;

// console.log(firstAddress);
// console.log(secCity);

//New Way
let { addresses: [, , { address, city, state, zipcode }] } = person;
console.log(address);
console.log(city);
console.log(state);
console.log(zipcode);

//Overwriting variable names and changing to what you want
// let { addresses: [, { city: brian }] } = person;
// console.log(brian);

// let creatAt = person.createdAt;
// console.log(creatAt);