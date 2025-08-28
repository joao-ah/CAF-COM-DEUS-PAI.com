//muda o nome a partir do seletor de classe
var pacientes = document.querySelector(".gege");
pacientes.textContent  = "Meus pacientes";
var aparecida = document.querySelector(".baba");
aparecida.textContent = "Café com Deus pai Nutrições";
pacientes.textContent = "Meus pacientes" ;
//acessar a tag tr - paciente Paulo
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;
console.log(altura);

//acessa e altera o imc
var imc = peso / (altura * altura);
var tdImc = paciente.querySelector(".info-imc");
tdImc.textContent = imc;

if(peso < 0 || peso > 1000){
    alert("Peso inválido")
}
if(altura < 0 || altura > 4.00){
    alert("Altura inválida")
}