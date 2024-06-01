"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let grades = [88, 94, 72, 99, 53, 77];
let averageGrades = grades.reduce((total, grade) => total + grade, 0) / grades.length;
console.log(averageGrades);
