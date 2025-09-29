const generarNumeroAleatorio = (min, max) => Math.floor(Math.random() * 100);

const numeroParaAcertar = generarNumeroAleatorio();

const NO_ES_UN_NUMERO = 0;
const EL_NUMERO_ES_MAYOR = 1;
const EL_NUMERO_ES_MENOR = 2;
const ES_EL_NUMERO_SECRETO = 3;

const muestraMensajeComprobacion = (texto, estado) => {
  let mensaje = "";

  switch (estado) {
    case NO_ES_UN_NUMERO:
      mensaje = `${texto} no es un número, 🤨 prueba otra vez`;
      break;
    case EL_NUMERO_ES_MAYOR:
      mensaje = `Uyyy!, el número ${texto} es MAYOR al número que buscas`;
      break;
    case EL_NUMERO_ES_MENOR:
      mensaje = `Uyyy!, el número ${texto} es MENOR al número que buscas`;
      break;
    case ES_EL_NUMERO_SECRETO:
      mensaje = `¡¡¡Enhorabuena, has acertado!!!`;
      break;
    default:
      mensaje = "No se que ha pasado, pero no deberías estar aquí";
      break;
  }

  document.getElementById("resultado").innerHTML = mensaje;
};

const comprobarNumero = (texto) => {
  const numero = parseInt(texto);
  const esUnNumero = !isNaN(numero);

  if (!esUnNumero) {
    return NO_ES_UN_NUMERO;
  }

  if (numero === numeroParaAcertar) {
    return ES_EL_NUMERO_SECRETO;
  }

  return numero > numeroParaAcertar ? EL_NUMERO_ES_MAYOR : EL_NUMERO_ES_MENOR;
};

const handleCompruebaClick = () => {
  const texto = document.getElementById("numero").value;
  const estado = comprobarNumero(texto);
  muestraMensajeComprobacion(texto, estado);
};

const botonComprobar = document.getElementById("comprobar");

botonComprobar.addEventListener("click", handleCompruebaClick);
