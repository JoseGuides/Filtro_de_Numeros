


function filtrarNumeros(entrada) {
  const resultado = entrada.replace(/[^0-9]/g, "");

  return resultado;
}

function filtrar() {
    const entrada = document.getElementById("entrada").value
    const resultado = filtrarNumeros(entrada)
    document.getElementById("resultado").textContent = resultado

}