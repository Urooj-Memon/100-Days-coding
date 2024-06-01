//mixed bag of items
let mixedArray = [1, "Apple", 2, "Banana", true, "Carrot"];

//pick out only the words
let stringArray = mixedArray.filter(item => typeof item === "string");
  
//shows the list of just words
console.log(stringArray);


