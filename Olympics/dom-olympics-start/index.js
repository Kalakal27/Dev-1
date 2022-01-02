var h1 = document.createElement('h1')
var h2 = document.createElement('h2')
var span = document.createElement('span')
var title = document.createTextNode('JavaScript Made This')
var myName = document.createTextNode('Timothy Mott')
var wrote = document.createTextNode('Made the Javascript code!')
h1.appendChild(title)
span.appendChild(myName)
span.classList.add("name")
h2.appendChild(span)
h2.appendChild(wrote)
document.body.prepend(h2)
document.body.prepend(h1)
var messages = document.querySelectorAll(".message")
var newMessages =["hello how are you doing" , "bad I just lost a game", "ah it will be ok","yea ill win next time"]
for (i =0; i <messages.length;i++) {
    console.log(this.messages[i])
    this.messages[i].innerText = newMessages[i];
}
var clearButton = document.querySelector("#clear-button")
clearButton.addEventListener('click', function (e){
    for(i = 0;i<messages.length;i ++){
        messages[i].remove();
    }
})

