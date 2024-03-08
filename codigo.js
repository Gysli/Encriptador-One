const textArea= document.querySelector(".text-area");
const mensaje = document.querySelector (".mensaje");
const textoValido= /^[a-z ñ\s]+$/;

  


function btnEncriptar()
{
    if (textArea.value === "" || textArea.length === 0) {
        alert("El mensaje esta vacio");
      } else {
        if (textoValido.test(textArea.value)) {
          const textoEncriptado = encriptar(textArea.value) 
          mensaje.value = textoEncriptado;
          textArea.value = "";

        } else {
          return alert("No se permiten Mayusculas o caracteres especiales");
        }
      }      
}   

function encriptar(stringEncriptada){

        let matriz_code = [
            ["e",  "enter"], // indice 0
            ["i",  "imes"], // indice 1
            ["a",  "ai"], // indice 2
            ["o",  "ober"], // indice 3 
            ["u",  "ufat"], // indice 4
        ];

        
        stringEncriptada = stringEncriptada.toLowerCase();

        for(let i = 0; i< matriz_code.length; i++)
        {
            if (stringEncriptada.includes(matriz_code[i][0]))
            {
                stringEncriptada = stringEncriptada.replaceAll(
                    matriz_code[i][0],
                    matriz_code[i][1]
                )     
            }                      
        }
    return stringEncriptada;
}


function btnDesencriptar()
{
    const textodesEncriptado = Desencriptar(textArea.value)
    mensaje.value = textodesEncriptado
    textArea.value = "";
    /*mensaje.style.backgroundImage = "none"; */

}   

function Desencriptar (frasedesEncriptada){

    let matriz_code = [
        ["e",  "enter"], // indice 0
        ["i",  "imes"], // indice 1
        ["a",  "ai"], // indice 2
        ["o",  "ober"], // indice 3 
        ["u",  "ufat"], // indice 4
    ];

    for(let i = 0; i< matriz_code.length; i++)
    {
        if (frasedesEncriptada.includes(matriz_code[i][1])){
            frasedesEncriptada = frasedesEncriptada.replaceAll(
                matriz_code[i][1],
                matriz_code[i][0]
            ) }
        
    }
    return frasedesEncriptada;

    
  
}
function btnCopiar()
{
navigator.clipboard.writeText(mensaje.value)
alert ("TEXTO COPIADO")
mensaje.value="";

}

