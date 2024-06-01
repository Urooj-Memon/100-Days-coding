function makeAdder(valueTooAdd: number): (number:number) => Number {
    return function(number: number): number {
        return number + valueTooAdd;
    };
}
let addFive = makeAdder(5);
console.log(addFive(10));


