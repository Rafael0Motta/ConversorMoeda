function main() {

  if(check()){ 
    return
  }

  let data = getData();
  let n1 = sorteador(data[0], data[1]);
  mostrarNumero(n1);
}

function check() {
  let n1 = document.querySelector("#inputN1").value;
  let n2 = document.querySelector("#inputN2").value;
  let showResult = document.querySelector("#resultado");
  return n1 === "" || n2 === "" ? showResult.innerHTML = `Um dos campos estã vazio <br> Insira os valores!`: console.log("Tudo certo");
}

function getData() {
  console.log("Entrei GetData()");
  let n1 = document.querySelector("#inputN1").value;
  let n2 = document.querySelector("#inputN2").value;
  console.log("Sai getData()");
  return [n1, n2];
}

function sorteador(n1, n2) {
  n1 = parseInt(n1);
  n2 = parseInt(n2);
  let numeroAleatorio = Math.floor(Math.random() * n2) + n1;
  return numeroAleatorio;
}

function mostrarNumero(resultado) {
  let showResult = document.querySelector("#resultado");

  showResult.innerHTML = `O Número sorteado foi: <br> ${resultado}`;
}
