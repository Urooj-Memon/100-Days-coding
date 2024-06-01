"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let mixedArray = [1, "Apple", 2, "Banana", true, "Carrot"];
let stringArray = mixedArray.filter(item => typeof item === "string");
console.log(stringArray);
