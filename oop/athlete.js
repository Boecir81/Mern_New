// We will create a blueprint for what every athelete should have (attributes/properties- name, health, speed) and be able to do (methods- playgame(), sayName(), showStats(), takeIceBath())


class Athlete {
    // Constructor means when a class is created, the code to run is inside the constructor
    constructor(nameInput, lastnameInput, healthInput, speedInput, strengthInput) {
        //Property = Values
        this.firstName = nameInput;
        this.lastName = lastnameInput;
        this.health = healthInput;
        this.speed = speedInput;
        this.strength = strengthInput;
    }


    // Our methods for the class
    competeInEnvent() {
        this.health -= 10;
    }

    displayStats() {
        // console.log("Athlete Info: \n Name: " + this.firstName + " \n Health: " + this.health)
        console.log(`Athlete info: \n FirstName: ${this.firstName} \n LastName: ${this.lastName} \n Health: ${this.health} \n Speed: ${this.speed} \n Strength: ${this.strength}`)
    }

    takeIceBath() {
        this.health += 10
    }
}

//Instances of a class "you can also call them objects"

const athlete1 = new Athlete("Brock", "Purdy", 98, 56, 95);
const athlete2 = new Athlete("Christan", "Macfre", 90, 93, 99);
const athlete3 = new Athlete("Deboo", "Samuel", 93, 94, 100);

// console.log(athlete1.firstName)
// console.log(athlete2)
// console.log(athlete3.lastName)

// athlete2.competeInEnvent()

// console.log(athlete2)

// console.log(athlete1.displayStats())
// console.log(athlete2.displayStats())
// console.log(athlete3.displayStats())
console.log(athlete1)
athlete1.competeInEnvent()
console.log(athlete1)
athlete1.takeIceBath()
console.log(athlete1)