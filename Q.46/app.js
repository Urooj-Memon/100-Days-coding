"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let laptop = {
    make: "DELL",
    model: "I7 GEN 8.",
    year: "2021",
    describe: function () {
        console.log(`THIS LAPTOP IS ${this.year} ${this.make} ${this.model} `);
    }
};
laptop.describe();
