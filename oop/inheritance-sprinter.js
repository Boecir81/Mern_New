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

//creating sub class use extends to inherit all code from Athlete

class Sprinter extends Athlete {
    //give the sprinter its own constructor if sprinter needs more atrributes
    constructor(nameInput, lastnameInput, healthInput, speedInput, strengthInput, person100mRecordInput) {
        //super means --> run the constructor of the parent class
        super(nameInput, lastnameInput, healthInput, speedInput, strengthInput)

        //personal 100m record is a specific property only for sprinters
        this.personal100mRecord = person100mRecordInput;
    }

    sprint() {
        console.log("Finally Sprinting to my goals!!!!!")
        this.health -= 20;
    }

}


class Baller extends Athlete {
    constructor(nameInput, lastnameInput, healthInput, speedInput, strengthInput, verticalJumpHeightInput) {
        super(nameInput, lastnameInput, healthInput, speedInput, strengthInput,)

        this.verticalJumpHeightInput = verticalJumpHeightInput;
    }

    slamDunk() {
        this.verticalJumpHeightInput -= 25;
        this.health -= 10;
    }

}


let sprinter1 = new Sprinter("Ulsane", "Bolt", 100, 110, 80, 9.58)

// console.log("Before Competeing")
// console.log(sprinter1)
// sprinter1.competeInEnvent()
// console.log("After Competeing")
// console.log(sprinter1)
// sprinter1.sprint()
// sprinter1.displayStats()
// console.log(sprinter1)

let baller1 = new Baller("Michael", "Jordan", 100, 95, 100, 95);
console.log(baller1)
console.log("After competeing")
baller1.competeInEnvent()
console.log(baller1)
baller1.slamDunk();
console.log(baller1);
baller1.displayStats();