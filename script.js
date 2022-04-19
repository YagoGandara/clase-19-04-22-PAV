console.log('Otro mensaje de depuracion!');
console.log('Otro mensaje de depuracion');
//document.write("Esceibiendo en el cuerpo del documento de js");
let salida = document.getElementById("salida");
salida.innerHTML = "Escribiendo <br>";
salida.innerHTML = "hola como andas";


const btnMensaje = document.getElementById("btnMensaje");

if(btnMensaje)
{
  btnMensaje.addEventListener("click", function(){alert('Holis')});
}

function escribirMensaje()
{
  const mensaje = document.querySelector("#mensaje");
  if(mensaje)
  {
    const txtMensaje = document.getElementById("txtMensaje");


    mensaje.innerHTML += "Mensaje: " + txtMensaje.value + "<br>";
    txtMensaje.value = "";
    mensaje.style.backgroundColor = 'red';
    mensaje.style.color = 'white';
  }
}

