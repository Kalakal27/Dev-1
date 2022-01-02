let string1 = ("Hello");

var uppercaseString1 = string1.toUpperCase()
console.log(uppercaseString1)

var lowercaseString1 = string1.toLowerCase()
console.log(lowercaseString1)

var newString1 = uppercaseString1.concat(lowercaseString1)
console.log(newString1)

var indexOfl = string1.indexOf("l")
console.log(indexOfl)

var indexOfl = 1.2;
console.log(Math.floor(indexOfl))

var slice1 =string1.slice(0, 2)
console.log(slice1)


var slice2 = string1.slice(2, 5)
console.log(slice2)

var uppercaseSlice1 = slice1.toUpperCase()
console.log(uppercaseSlice1)

var lowercaseSlice2 = slice2.toLowerCase()
console.log(lowercaseSlice2)

var endResult = uppercaseSlice1.concat(lowercaseSlice2)
console.log(endResult)