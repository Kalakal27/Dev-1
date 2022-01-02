var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
alphabet = "abcdefghijklmnopqrstuvwxyz"
let newArr= []
function forception(people, alphabet) {
    for (let i =0; i < people.length; i++) {
        newArr.push(people[i])


    for (let j =0;j < alphabet.length;j++) {
        newArr.push(alphabet[j].toUpperCase() );

    }
}
return newArr
}
console.log(forception(people,alphabet))
