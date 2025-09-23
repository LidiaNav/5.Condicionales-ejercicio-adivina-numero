const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * 100);

const numeroParaAcertar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const NO_ES_EL_NUMERO_SECRETO = 1;
const ES_EL_NUMERO_SECRETO = 2;

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";
  if (estado === NO_ES_UN_NUMERO) {
    mensaje = `${texto} no es un número, 🤨 prueba otra vez`;
  } else {
    if (estado === NO_ES_EL_NUMERO_SECRETO) {
      mensaje = `Lo siento, ${texto} no es el numero correcto, prueba otra vez`;
    } else {
      if (estado === ES_EL_NUMERO_SECRETO) {
        mensaje = `¡¡¡Enhorabuena, has acertado!!!`;
      }
    }
  }
  document.getElementById("resultado").innerHTML = mensaje;
};

const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);
  let resultado = NO_ES_UN_NUMERO;

  if (esUnNumero) {
    if (numero === numeroParaAcertar) {
      resultado = ES_EL_NUMERO_SECRETO;
    } else {
      resultado = NO_ES_EL_NUMERO_SECRETO;
    }
  }

  return resultado;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
};

/*const comprobarNumero = () => {
  const texto = document.getElementById("numero").value;
  const numero = parseInt(texto.value);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    document.getElementById(
      "resultado"
    ).innerHTML = `${texto} no es un número, 🤨 prueba otra vez`;
  } else {
    if (numero === numeroParaAcertar) {
      document.getElementById(
        "resultado"
      ).innerHTML = `¡¡¡Enhorabuena, has acertado!!!`;
    } else {
      document.getElementById(
        "resultado"
      ).innerHTML = `Lo siento ${texto} no es el numero correcto, prueba otra vez`;
    }
  }
};*/

const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", handleCompruebaClick);
