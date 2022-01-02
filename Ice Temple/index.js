const readlineSync = require("readline-sync");
const name = readlineSync.question("welcome to the frost temple. you and others accepted a quest to clear a temple with a growing threat of monsters. while fighting a horde of monsters you were biten by a venomous spider, you lost conscious and was taken. What will be your name?");
let stats = {
    name: name, 
    hp: 100,
    inventory: ["sword", ]
}
isAlive = true
let mid = {
    name: "Ice Weaver",
    hp: 50,
}
let low = {
    name: "Crypt Spider",
    hp: 25,
}
let high = {
    name: "Crystalline Queen",
    hp: 75,
}
function createEnemy(){
    let randomNum = Math.floor(Math.random()*3)
    if(randomNum === 0){
        return low
    }
    else if(randomNum === 1){
        return mid
    }
    else {
        return high
    }
}
var enemyDrop = ["Iron Coin", "Gold Coin", "Temple Key"]
while(isAlive == true){
    const input = readlineSync.question(`${name} press w to walk press p for stats/inventory:`)
    walk(input)
}
function walk(input){
    
    if(input == "w"){
        let enemyChance = Math.floor(Math.random()*4)
        let currentEnemy = createEnemy()
    if(enemyChance === 0){
    console.log("you feel like your being stalked")
    }
    else if(enemyChance === 1){
          fight(currentEnemy)
        
    }
    else if(enemyChance === 2){
         console.log(`you see a something crawl down its web`)
    }
    else if(enemyChance === 3){
        console.log(` you see something hatch from an egg sac`)
    }
    }
    else if (input === "p"){
        console.log(stats)  
}

 function fight(currentEnemy){
     
     let fightOrFlight = readlineSync.question(` you are being attacked by a ${currentEnemy.name} what will you do? press[F] to fight or press[R] to run`)
     if(fightOrFlight === "f"){
         battle(currentEnemy)
     }
     else if(fightOrFlight === "r"){
         return run()
     }
     
     

    
    function run(){
        fleeOrTrip = Math.floor((Math.random()*2)+1)
        if(fleeOrTrip === 1){
           isFighting = false
           console.log("you escaped")
            return walk()
        }
        else{
            isFighting = isFighting
            console.log("you tripped")
            return fight(currentEnemy)
            
        }
        

    }
}

    function battle(currentEnemy){
        // let isFighting = true
    //  while(isFighting)
        const randomDrop = enemyDrop[Math.floor(Math.random() * enemyDrop.length)];
     while(stats.hp > 0|| currentEnemy.hp > 0){
         let damageReceived = Math.floor((Math.random()*10)+1)
         if(stats.hp > 0 && currentEnemy.hp > 0){
             let playerHp = stats.hp -= damageReceived
             console.log(`${currentEnemy.name} hits you for` + damageReceived + `now ${name} has` + playerHp + `left`)
         }
         else if(stats.hp <= 0){
             playerDies()
             break
         }
         let damageDealt = Math.floor((Math.random()*10)+1)
         if(stats.hp > 0 && currentEnemy.hp > 0){
            let enemyHealth = currentEnemy.hp -= damageDealt
            console.log(`you did` + damageDealt + `${currentEnemy.name} now has` + enemyHealth + `left`)
         }
         else if(currentEnemy.hp <=0){
             tangoDown()
             break 
             
             
         }
         function playerDies(){
        console.log("Though you fought your hardest the monster proved to much for you and perished by its hands");
        isAlive = false
        process.exit()
         }
         function tangoDown(){
             
             console.log("in your fight with the monster you came out victorious you resotred 10hp")
             stats.inventory.push(randomDrop)
             stats.hp += 10
             console.log("you received a " + randomDrop + "for your effort")
             stats.inventory.push(randomDrop);
             walk()
             
             
             
            
             

             
         }
     }
    }




}
