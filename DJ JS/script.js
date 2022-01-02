var button = document.querySelector('button')

button.addEventListener('mouseover', ()=>{button.style.backgroundColor= "blue"})
button.addEventListener('mouseout', ()=>{button.style.backgroundColor="white"})
button.addEventListener('dblclick', ()=>{button.style.backgroundColor="green"})
button.addEventListener('mouseup', ()=>{button.style.backgroundColor="yellow"})
button.addEventListener('mousedown', ()=>{button.style.backgroundColor="red"})
button.addEventListener('mouseleave', ()=>{button.style.backgroundColor="orange"})
window.addEventListener('keydown', checkKeyPress, false);
function checkKeyPress(key){
    if (key.keyCode == "65"){
        alert('You pressed A')
    }
    else if (key.keyCode == "82"){
        button.style.backgroundColor="red"
    }
}
