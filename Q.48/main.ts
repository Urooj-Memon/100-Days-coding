let priceSet1 = [1200, 1500, 1100];
let priceSet2 = [1000, 1300, 1600];

let combinedPrice =[...priceSet1, ...priceSet2].sort((a, b) => a-b);
console.log(combinedPrice);
