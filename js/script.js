
var creaButton = document.getElementById("creaBiglietto")

var costoTotale;
var costoKm = 0.21;

// dati dei num.treno e Carrozza
var minCarrozza = 1;
var maxCarrozza = 10;
var minNumTreno = 90000;
var maxNumTreno = 100000;

// parte del bottone
creaButton.addEventListener("click", function(){
  var nome = document.getElementById("nome").value;
  var km = document.getElementById("km").value;
  var categoria = document.getElementById("categoria").value;
  //  test console
  // console.log(nome);
  // console.log(km);
  // console.log(categoria);
  if (categoria == "minorenne") {
    costoTotale = km * costoKm - 20/100 * (km * costoKm);

  } else if (categoria == "over65") {
    costoTotale = km * costoKm - 40/100 * (km * costoKm);

  }else {
    costoTotale = km * costoKm;
  }

  var numeroTreno = Math.floor(Math.random() * (maxNumTreno - minNumTreno +1 )) + minNumTreno;
  var carrozza = Math.floor(Math.random() * (maxCarrozza - minCarrozza +1 )) +minCarrozza;

  document.getElementById("passeggero").innerHTML = nome;
  document.getElementById("numeroTreno").innerHTML = numeroTreno;
  document.getElementById("carrozza").innerHTML = carrozza;
  document.getElementById("prezzoBiglietto").innerHTML = costoTotale;
  document.getElementById("categoriaEta").innerHTML = categoria;



})
