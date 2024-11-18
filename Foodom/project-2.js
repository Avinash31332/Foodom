const left= document.getElementsByClassName("contet-1");
let bars =document.getElementsByTagName("bars");

function myfunction(){
    document.querySelector(".content-1").classList.toggle("add");
}

let te= document.getElementById("te");
let tomato=document.getElementById("tomato");

te.onclick= function(){
    tomato.textContent = "టమోటా";
}