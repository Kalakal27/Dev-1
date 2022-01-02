function largest(array) {
    let maximum = array[0]
    for (i = 0; i < array.length; i++) {
        if (array[i] > maximum) {
            maximum = array[i]
        }
    }
    return maximum
}
console.log(largest([3, 5, 2, 8, 1]))

str = ['!']
arr = ["#3", "$$$", "C%4!", "Hey!"]
 var newArr = lettersWithStrings(arr,str)
function lettersWithStrings(arr, str) {
    let newArr = []
    for (var a = 0, len = arr.length; a < len; a++) {
        // if "!" found in the array's chosen string
        if (arr[a].includes('!')) {
            // add the string to newArr
            newArr.push(arr[a])
        }
    }

    return newArr
}
console.log(newArr)

function divisable(num1,num2) {
    if(num1%num2 === 0){
        console.log(''+num1+'is divisable by'+num2+'.')

    }
    else{
        console.log("these numbers aren't divisable")
    }

}

divisable(4, 2);

divisable(9, 3)
divisable(15, 4)