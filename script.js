let css = document.querySelector("h3");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");
let button = document.querySelector("button");
let hex = document.querySelector("h4");

function randomColor(){
 let randomColor1 = Math.floor(Math.random()*16777215).toString(16);
 // color1.value = randomColor1;
 console.log(randomColor1);
 let randomColor2 = Math.floor(Math.random()*16777215).toString(16);
 // color2.value = randomColor2;
 console.log(randomColor2);
 body.style.background = "linear-gradient(to right, " + "#" + randomColor1 + ", " + "#" + randomColor2 + ")";
 button.style.background = "linear-gradient(to right, " + "#" + randomColor1 + ", " + "#" + randomColor2 + ")";
 css.textContent = body.style.background + ";";
 hex.textContent = "#" + randomColor1 +" ;" + " #" + randomColor2 + " ;";
 

}

function changeGradient(){
 body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value +")";
 css.textContent = body.style.background + ";";
}

button.addEventListener("click", randomColor);
color2.addEventListener("input", changeGradient);
color1.addEventListener("input", changeGradient);