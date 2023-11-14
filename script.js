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
  return [n1, n2];
}

function sorteador(n1, n2) {
  let min = Math.ceil(n1);
  let max = Math.floor(n2);
  return Math.floor(Math.random()*(max - min +1)) + min;
}

function mostrarNumero(resultado) {
  let showResult = document.querySelector("#resultado");

  showResult.innerHTML = `O Número sorteado foi: <br> ${resultado}`;
}
