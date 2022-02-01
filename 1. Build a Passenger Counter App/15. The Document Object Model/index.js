//Document Object Model (aka how you use Javascript to modify a website)
//Document = HTML
//Object = Document Object in Javascript
//Model = Javascript representation of HTML elements

let countEl = document.getElementById("count-el")
let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
}


