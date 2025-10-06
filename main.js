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
        paciente.classList.add("campo-invalido");
    }
    if(altura <= 0 || altura >= 3.00){
        paciente.classList.add("campo-invalido");
        var alturaValida = false;
        tdImc.textContent = "Altura Inválida";
        paciente.style.backgroundColor = "red";
    }
}

titulo.addEventListener('click', mostraMensagem)

function mostraMensagem(){
    alert("Este elemento foi clicado");
    var nome = formulario.nome.value;
}

var botaoAdicionar = document.querySelector("#adicionar-paciente");
//executa os codigos ao clicar no botao
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();
    var formulario = document.querySelector("#form-adiciona");

//Captura os valores digitados
var nome = formulario.nome.value;
var peso = formulario.peso.value;
var altura = formulario.altura.value;
var gordura = formulario.gordura.value;

var pacienteTr = document.createElement("tr");
//criar as tags td
var nomeTd = document.createElement("td");
var pesoTd = document.createElement("td");
var alturaTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;
imcTd.textContent = imc;

//adiciona as tags na tela o usuario 
pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
});

