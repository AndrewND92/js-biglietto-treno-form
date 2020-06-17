
var creaButton = document.getElementById("creaBiglietto")

var costoTotale;
var costoKm = 0.21;

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

  var numeroTreno = Math.floor(Math.random()*( ))


  console.log(costoTotale);
})
