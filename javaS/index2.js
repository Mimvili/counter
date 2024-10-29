let vili = document.getElementById('vili')
console.log(vili)
let saveEl = document.getElementById('save-el')
console.log(saveEl)
let count = 0;

function increment(){
    count += 1;
    vili.textContent = count
    console.log(count) 
}

function save(){
   let countStr = count + "-"
   saveEl.textContent += countStr
    console.log(count)
    vili.textContent = 0
    count = 0
}

let names = 'Mimvili'
let greeting = "Hi, my name is"
let myGreeting = greeting + names 
console.log(myGreeting)