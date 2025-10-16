var botaoAdicionar = document.querySelector("#adicionar-paciente");

//executa os codigos ao clicar no botao
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    var pacienteTr = criarTr(paciente);

    var paciente = buscaValoresFormulario(formulario);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);
})

function buscaValoresFormulario(formulario){

    //Captura os valores digitados

    var paciente = {
        nome: formulario.nome.value,
        peso: formulario.peso.value,
        altura: formulario.altura.value,
        gordura: formulario.gordura.value,
        imc: calcularIMC(formulario.peso.value, formulario.altura.value)
    }
   return paciente;
 
}

function criarTr(paciente){

    var pacienteTr = document.createElement("tr");

    //criar as tags td

    var nomeTd = document.createElement("td");
    var pesoTd = document.createElement("td");
    var alturaTd = document.createElement("td");
    var gorduraTd = document.createElement("td");
    var imcTd = document.createElement("td");
    
    nomeTd.textContent = paciente.nome;
    pesoTd.textContent = paciente.peso;
    alturaTd.textContent = paciente.altura;
    gorduraTd.textContent = paciente.gordura;
    imcTd.textContent = paciente.imc;

    //adiciona as tags na tela o usuario 

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;   
}