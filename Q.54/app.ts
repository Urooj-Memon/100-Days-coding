
// A way to make a flexible list
function createObjectWithDynamicKey(key: string, value: string) {
    let dynamicObject : any = {};
    dynamicObject[key] = value;
    return dynamicObject;
   }
   
   let userPreference = createObjectWithDynamicKey("theme", "dark");
  
   console.log(userPreference);