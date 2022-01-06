import cipher from './cipher.js';

// cifrado
document.getElementById("cipherText").addEventListener("keyup",upperCase, true);
function upperCase(){
  this.value = this.value.toUpperCase();
}
document.getElementById("cifrar").addEventListener("click", addClick, true);
document.getElementById("cifrar").addEventListener("click",function(){
    let desplazamiento = document.getElementById("offset").value;
    let texto = document.getElementById("cipherText").value;
  if (contador % 2 == 1)
    return document.getElementById("cipherText").value = cipher.encode(desplazamiento, texto);
  else (contador % 2 == 0)
    return document.getElementById("cipherText").value = cipher.decode(desplazamiento, texto);
}, true);
// intento de animación entre cifrado y desifrado
// document.getElementById("cifrar").addEventListener("click", fadeOut,fadeIn);
// function fadeOut(){
//   document.getElementById("cipherText").style.opacity = "0";
// }
// function fadeIn(){
//   document.getElementById("cipherText").style.opacity = "1";
// }
document.getElementById("offset").addEventListener("click", resetClick);
//contador de clicks
let contador = 0;
function addClick(){
    sumaClick(++contador);
}
function resetClick(){
    contador = 0;
    sumaClick(contador)
}
function sumaClick() {
}
//opción 2 de contador de click
// function addClick(){
//     let contador = 0
//     for (let c=1; c<=1; c++){
//         contador += c;
//         console.log(addClick)
//     }
// }

//traer el elemento y luego escuchar el click y ejecuta funcion pageTwo
document.getElementById("key").addEventListener("click",pageTwo)
function pageTwo() {
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "block";
document.getElementById("three").style.display = "none";
}
document.getElementById("hechizo").addEventListener("click",pageThree)
// document.getElementById("hechizo").addEventListener("mouseover", function(){
//     this.style.cursor = "pointer";
// },true);  
function pageThree() {
document.getElementById("one").style.display = "none";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "block";
}
document.getElementById("inicio1").addEventListener("click",pageOne)
function pageOne() {
document.getElementById("one").style.display = "block";
document.getElementById("two").style.display = "none";
document.getElementById("three").style.display = "none";
}
document.getElementById("inicio2").addEventListener("click",pageOne)


document.getElementById("newPage").addEventListener("click", newPage);
function newPage() {
   let page = document.getElementById("three");
    let clon = page.cloneNode(true);
    clon.style.display = "block";
    document.body.appendChild(clon);
    document.getElementById("one").style.display = "none";
    document.getElementById("two").style.display = "none";
    document.getElementById("three").style.display = "none";
page.setAttribute("id","four");
}

// console.log(cipher);