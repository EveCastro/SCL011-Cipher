/*Acá va tu código*/

const cifrar= document.getElementById("cifrar"); 
let mensajeCifrado=document.getElementById("respuestaCifrado");
cifrar.addEventListener("click",()=> {
let mensaje = document.getElementById ("mensaje").value.toUpperCase();
let offset = parseInt(document.getElementById ("offset").value);
mensajeCifrado.innerHTML=window.cipher.encode(mensaje,offset);

});

const descifrar=document.getElementById("descifrar");
let mensajeDescifrado=document.getElementById("respuestaDescifrado");
descifrar.addEventListener("click",()=> {
let mensaje2 = document.getElementById ("mensaje2").value.toUpperCase(); 
let offset = parseInt(document.getElementById ("offset").value);
mensajeDescifrado.innerHTML=window.cipher.decode(mensaje2,offset);
});








