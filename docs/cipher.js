const cipher = {
 encode,
 decode
};

function encode(desplazamiento, texto){
  if(texto==="" || desplazamiento==="null" || texto.length===0 || desplazamiento===0){
    throw new TypeError();
  }
  let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26 + 26) % 26;
  if(texto){
    for (let i=0; i<texto.length; ++i){
      if (letras.indexOf(texto[i])!=-1){
        let posicion=((letras.indexOf(texto[i])+desplazamiento) % 26);
        resultado+=letras[posicion];
      }
      else
          resultado+=texto[i];
    }
  }
    return resultado;
}

function decode(desplazamiento, texto){
  if(texto==="" || desplazamiento==="null" || texto.length===0 || desplazamiento===0){
   throw new TypeError();   
  }
  let resultado = "";
  const letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  desplazamiento = (desplazamiento % 26 - 26) % 26;
  if(texto){
    for (let i=0; i<texto.length; ++i){
      if (letras.indexOf(texto[i])!=-1){
        let posicion=((letras.indexOf(texto[i])-desplazamiento) % 26);
        resultado+=letras[posicion];
      }
      else
          resultado+=texto[i];
    }
  }
    return resultado;
}
// console.log (cipher)
export default cipher;
