/*
* File: app.ts
* Author: Juhász Zsolt
* Copyright: 2021, Juhász Zsolt
* Group: Szoft 2 N
* Date: 2021-09-03
* Github: https://github.com/ZsoltJuhasz/
* Licenc: GNU GPL
*/

const num1 = document.querySelector("#num1") as HTMLInputElement;
const num2 = document.querySelector("#num2") as HTMLInputElement;
const result = document.querySelector("#result") as HTMLInputElement;

const calcButton = document.querySelector("#calcButton");

function add(number1: number,number2: number):number{
    return number1 + number2;
}

//console.log(add(30,35));

calcButton.addEventListener('click',event => {
    let res = add(+num1.value, +num2.value);
    result.value = String(res);
});
