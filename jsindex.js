var valgtObject;
var valgtDato;
var valgtMaaned;
var valgtVask;
var valgtTumbler;

var bjarneLarsen = {
  navn: "Bjarne Larsen",
  adresse: "Buldergade 4, 1.tv",
  dato: [],
  maaned: [],
  vaske: [],
  torretumbler: []
  }
  
var susanJensen = {
  navn: "Susan Jensen",
  adresse: "Buldergade 4, 2.th",
  dato: [],
  maaned: [],
  vaske: [],
  torretumbler: []
  }

var oleHansen = {
    navn: "Ole Hansen",
    adresse: "Buldergade 4, 3.tv",
    dato: [],
    maaned: [],
    vaske: [],
    torretumbler: []
    }

function opretFunk() {
  valgtObject = window[document.getElementById("beboList").value];
  alert(valgtObject['navn']);
  var valgtDato = document.getElementById("inputDato").value;
  var valgtMaaned = document.getElementById("inputMaaned").value;
  var valgtVask = document.getElementById("inputVask").value;
  var valgtTumbler = document.getElementById("inputTumbler").value;
  valgtObject['dato'].push(valgtDato);
  valgtObject['maaned'].push(valgtMaaned);
  valgtObject['vaske'].push(valgtVask);
  valgtObject['torretumbler'].push(valgtTumbler);
  return valgtObject; 
  }

function visFunk() {
  console.log(valgtObject)
  var x=valgtObject.dato; 
  var textData = "";
  var i;
    for (i = 0; i < x; i++) {
    textData += "Dato: " + valgtObject.dato[i] + " Måned: " + valgtObject.maaned[i] + " Antal vaske: " + valgtObject.vaske[i] + " Antal tørretumbler: " + valgtObject.torretumbler[i] + "<br>";
    }
  document.getElementById("outputPerson").innerHTML = valgtObject.navn + " " + valgtObject.adresse;
  document.getElementById("outputData").innerHTML = textData;
  }
