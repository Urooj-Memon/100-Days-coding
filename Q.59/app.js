"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeAdder(valueTooAdd) {
    return function (number) {
        return number + valueTooAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));
