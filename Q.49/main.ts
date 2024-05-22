function logHobbies(...hobbies: string[]){
    hobbies.forEach(hobby => {
        console.log(`I Enjoy ${hobby}`);
        
    });
}

logHobbies("Coding", "Reading", "Typescript");