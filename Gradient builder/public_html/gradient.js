/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var css=document.querySelector("h3");
var color1=document.getElementById("color1");
var color2=document.getElementById("color2");
var body=document.getElementById("gradient");

function setColor(){
    body.style.background="linear-gradient(to right,"
    + color1.value
    +","
    +color2.value
    +")" ;
    css.textContent=body.style.background+";";
}

 color1.addEventListener("input",setColor);
 color2.addEventListener("input",setColor);


