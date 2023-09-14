
//Differnt ways to write function


// function whatsUp() {
//     console.log("whats up brian");
//     return "rice"
// }


// const whatsUp = function () {
//     console.log("whats up brian");
//     return "rice"
// }


//Arrow Function
const whatsUp = (firstName, lastName) => {
    console.log("whats up " + firstName + " " + lastName);
    return "rice";
}

whatsUp("Brian", "Rice");
whatsUp("Nicholas", "Rice");