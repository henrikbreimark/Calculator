function calculate (operator, numberA, numberB) {
    return operator(numberA, numberB);
}

function add (numberA, numberB) {
    return numberA+numberB;
}

function sub (numberA, numberB) {
    return numberA-numberB;
}

function multi (numberA, numberB) {
    return numberA*numberB;
}

function div (numberA, numberB) {
    return numberA/numberB;
}

//Input screen

let pressedKey = ""; 
let currentNumb ="";
let storedNumber= 0;
let storedNumber2 = 0;
let operation;

let input = document.querySelector('#number-input')

function currentNumbUpdate(){
    currentNumb = currentNumb.concat(pressedKey);
    input.innerHTML=currentNumb;
}

addEventListener('load', loadbuttons)

function loadbuttons (){
    let numbers = document.querySelectorAll('.number');
    let mul = document.querySelector('.mul');
    let add = document.querySelector('.add');
    let sub = document.querySelector('.sub');
    let div= document.querySelector('.div');
    let equal = document.querySelector('.equal');
    let clear = document.querySelector('.clear');
    numbers.forEach(element => {
        element.addEventListener('click', getValue) 
    });
    add.addEventListener('click', addNumbers);
    equal.addEventListener('click', equals)
    sub.addEventListener('click', subNumbers);
    mul.addEventListener('click', mulNumbers);
    div.addEventListener('click', divNumbers);
    
}

function getValue(){
pressedKey = event.target.innerHTML;
currentNumbUpdate();
}

function addNumbers (){
    storedNumber = parseInt(currentNumb);
    operation=add;
    currentNumb="";
}

function subNumbers (){
    storedNumber = parseInt(currentNumb);
    operation=sub;
    currentNumb="";
}


function mulNumbers (){
    storedNumber = parseInt(currentNumb);
    operation=multi;
    currentNumb="";
}

function divNumbers (){
    storedNumber = parseInt(currentNumb);
    operation=div;
    currentNumb="";
}

function equals (){
    storedNumber2 = parseInt(currentNumb);
    let result = calculate(operation, storedNumber, storedNumber2)
    input.innerHTML=result;
}