;
var tom = {
    name: "tom",
    age: 25
};
function canDrive(user) {
    console.log("User is ".concat(user.name));
    if (user.age >= 16) {
        console.log("Allow to drive.");
    }
    else {
        console.log("Do not allow to drive.");
    }
}
canDrive(tom);
