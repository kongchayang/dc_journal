"use strict";

//const and let = var  button1 = class name of button   document = accessing the DOM.  querySelector = grab the first element that matches whatever is in () which is .button1
const button1 = document.querySelector('.button1')
const button2 = document.querySelector('.button2')
const box1 = document.querySelector('.box1')
const box2 = document.querySelector('.box2')

//button1 is attach to a event handler(a block of codes that set off when trigger). When it's click on, it will run thru it's function of printing out it designated text.
button1.addEventListener('click', function(){
    box1.textContent = "We presented our API projects today. My understanding of the basic was very limited. So I'm working on the fundamental of the DOM again. " 
})

button2.addEventListener('click', function(){
    box2.textContent = "The tree model is a reoccurring theme."
})

box1.addEventListener('click', function(){
    changeBackgroundColor(box2, 'orange')
})

box2.addEventListener('click', function(){
    box1.classList.remove('grey')
})

function changeBackgroundColor(element, classToRemove){
    element.classList.add('grey')
    element.classList.remove(classToRemove)
}

