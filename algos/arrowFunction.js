
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
const whatsUp = (firstName, middleName, lastName) => {
    console.log("whats up " + firstName + " " + middleName + " " + lastName);
    return "rice";
}

whatsUp("Brian", "Nicholas", "Rice");
whatsUp("Nicholas", "Brian", "Rice"); 