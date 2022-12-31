// Declaring a class called "Person" with a single property called "name"
class Person {
    name: string;
};

// Declaring a constant called "jill" with a type of an object that has a single property called "name"
const jill: { name: string } = {
    name: "jill"
};

// Declaring a constant called "person" with a type of "Person" and setting its value to the constant "jill"
const person: Person = jill;

// Printing the value of the "person" constant to the console
console.log(person);