//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".subtitulo");
var titulo = document.querySelector(".titulo");
titulo.textContent = "cu Nutrição";
subtitulo.textContent = "Meus Pacientes";

//acessar a tag tr - paciente Paulo
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){
    var paciente = pacientes[i];

    //seleciona o conteúdo peso da tag
    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent;

    // seleciona o conteúdo altura da tag
    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    //calcula o imc
    var imc = peso / (altura * altura);

    //variáveis com valor true
    var pesoValido = true;
    var alturaValida = true; 

    if(pesoValido && alturaValida){
        // acessa e altera o imc
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc.toFixed(1);
    }
    //define limites de peso e altura
    if(peso <= 0 || peso >= 1000){
        var pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        paciente.style.backgroundColor = "red";
    }
    if(altura <= 0 || altura >= 3.00){
        var alturaValida = false;
        tdImc.textContent = "Altura Inválida";
    }
}