// let value: any = 22;
// value = "string value";
// value = new Array();
// value.doesnotexist(33);
// console.log(value);
var value = 22;
value = "string value";
value = new Array();
if (value instanceof Array) {
    value.push(33);
}
console.log(value);
