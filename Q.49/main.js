function logHobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I Enjoy ".concat(hobby));
    });
}
logHobbies("Coding", "Reading", "Typescript");
