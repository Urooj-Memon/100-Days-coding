// function createObject(key: string, value: string) {
//     let dynamicObject = {};
//     dynamicObject[key] = value;
//     return dynamicObject;
//     }
//     let userPreference = createObject("theme", "dark");
//     console.log(userPreference);
// function updateKeys(obj: myObj, keyMap: {[newKey: string]:string}): myObj{
//     const updatedObj: myObj ={};
//     for(const newKey in keyMap){
//         if(keyMap.hasOwnProperty(newKey)&&obj.hasOwnProperty(keyMap[newKey])){
//             updatedObj[newKey]=obj[keyMap[newKey]];
//         }
//     }
//     return updatedObj;
// }
// const orignalObject: myObj={
//     name: "john Doe",
//     age: 30,
//     city: "New york"
// };
// const keyMap ={
//     fullName: "name",
//     years: "age",
//     location: "city"
// };
// const updatedObj =updateKeys(orignalObject,keyMap);
// console.log(updatedObj);
// function updateKeys(obj: FlexibleObject, keyMap: { [newKey: string]: string }): FlexibleObject {
//     const updatedObj: FlexibleObject = {};
//     for (const newKey in keyMap) {
//     if (keyMap.hasOwnProperty(newKey) && obj.hasOwnProperty(keyMap[newKey])) {
//     updatedObj[newKey] = obj[keyMap[newKey]];
//     }
//     }
//     return updatedObj;
//    }
//    const originalObject: FlexibleObject = {
//     name: "John Doe",
//     age: 30,
//     city: "New York"
//    };
//    const keyMap = {
//     fullName: "name",
//     years: "age",
//     location: "city"
//    };
//    const updatedObject = updateKeys(originalObject, keyMap);
//    console.log(updatedObject);
// A way to make a flexible list
function createObjectWithDynamicKey(key, value) {
    let dynamicObject = {};
    // Setting up a section in the list with a changeable name
    dynamicObject[key] = value;
    return dynamicObject;
}
// Using the flexible list setup for a user's preference
let userPreference = createObjectWithDynamicKey("theme", "dark");
// Showing the user's choice
console.log(userPreference);
export {};
