'use strict';

const myNameInput = document.querySelector('#myNameInput');
const favoriteCandyInput = document.querySelector('#favoriteCandyInput')
const submitButton = document.querySelector('#submitButton');
const submitButton1 = document.querySelector('#submitButton1');

function 


submitButton.addEventListener('click', function () {
    console.log(myNameInput.value);
})

submitButton1.addEventListener('click', function () {
    console.log(favoriteCandyInput.value);
})