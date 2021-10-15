/*
* File: app.ts
* Author: Juhász Zsolt
* Copyright: 2021, Juhász Zsolt
* Group: Szoft 2 N
* Date: 2021-09-03
* Github: https://github.com/ZsoltJuhasz/
* Licenc: GNU GPL
*/
var num1 = document.querySelector("#num1");
var num2 = document.querySelector("#num2");
var result = document.querySelector("#result");
var calcButton = document.querySelector("#calcButton");
function add(number1, number2) {
    return number1 + number2;
}
//console.log(add(30,35));
calcButton.addEventListener('click', function (event) {
    var res = add(+num1.value, +num2.value);
    result.value = String(res);
});
