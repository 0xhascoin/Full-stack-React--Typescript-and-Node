interface User {
    name: string;
    age: number;
};

const tom: User = {
    name: "tom",
    age: 25
};

function canDrive(user: User) {
    console.log(`User is ${user.name}`);

    if(user.age >= 16) {
        console.log("Allow to drive.");
    } else {
        console.log("Do not allow to drive.");
    }
}

canDrive(tom);