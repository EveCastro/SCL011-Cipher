window.cipher = {
  encode: (mensaje,offset) => {
    /* Acá va tu código */
   
    //variable se declara vacia para agregarle un valor
    let mensajefinal= "";

    
      //para recorrer el texto captado
    for (let i = 0; i<mensaje.length; i++) {

      
      let cifrado = (mensaje.charCodeAt(i));
      if(cifrado >=65 && cifrado<=90){
        mensajefinal+=String.fromCharCode(((cifrado-65 +offset)% 26)+65);
      }
      //para crear el espacio
     else if (cifrado ==32){
       mensajefinal+=String.fromCharCode(cifrado)
     }
    
      //mostrar el mensaje cifrado en el box 2
     //document.getElementById ("mensaje2").value=mensajefinal;
    
    }
     return mensajefinal;
    
  },




  decode: (mensaje2,offset) => {
    /* Acá va tu código */
    //variable se declara vacia para agregarle un valor
    let mensajefinal2= "";

    for (let i = 0; i<mensaje2.length; i++) {

      
      let descifrado = (mensaje2.charCodeAt(i));
      if(descifrado >=65 && descifrado<=90){
        mensajefinal2+=String.fromCharCode(((descifrado+65 -offset)% 26)+65);
        }
     else if (descifrado ==32){
       mensajefinal2+=String.fromCharCode(descifrado)
     }
     
      //document.getElementById ("mensaje2").value=mensajefinal2;
    
    }  
    

     return mensajefinal2;
  }
   
  

};
