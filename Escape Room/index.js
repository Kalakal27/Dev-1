const readline = require("readline-sync");
const name = readline.question("what is your name?");
console.log(name);
console.log("welcome to my escape. find the key and you live, fail and you die");
let isAlive=true;
let hasKey=false;
let doorLock=true;
while(doorLock & isAlive){

let options=["open door", "put hand in hole", "look in toilet"];
const choice= readline.keyInSelect(options, 'whats will you do')

if (choice ===0){
console.log("door is locked");
isAlive=true;
hasKey=false;
doorLock=true;
}
else if(choice ===1){
console.log("your hands was sliced off");
isAlive=false;
}
else if(choice ===2){
    console.log("you find the key");
    isAlive=true;
    hasKey=true;
    doorLock=true;
}
while(isAlive === true & hasKey === true){

    let options=["open door", "put hand in hole", "look in toilet"];
const choice= readline.keyInSelect(options, 'whats will you do')

    if(choice ===0){
        console.log("door is unlocked")
        isAlive=false;
        hasKey=true;
        doorLock=false;
    }
    else if(choice ===1){
        console.log("your hands was sliced off");
        isAlive=false;
        hasKey=true;
        doorLock=true
    }
    else if(choice===3){
        console.log("hands pulls you in");
        isAlive=false;
        hasKey=true;
        doorLock=true;
    }
}
 
}
