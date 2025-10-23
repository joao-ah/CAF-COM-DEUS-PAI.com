var botaoAdicionar = document.querySelector("#adicionar-paciente");

// Executa os códigos ao clicar no botão
botaoAdicionar.addEventListener('click', function(event){
    event.preventDefault();

    var formulario = document.querySelector("#form-adiciona");

    // Primeiro, cria o paciente com os valores do formulário
    var paciente = buscaValoresFormulario(formulario);

    // Agora, cria a tr para adicionar na tabela
    var pacienteTr = criarTr(paciente);

    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    formulario.reset();
});

function buscaValoresFormulario(formulario){
    // Captura os valores digitados
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
    pacienteTr.classList.add("paciente");

    // Criar as tags td

    //criar tr
    var pacienteTr = document. createElement("tr");
    pacienteTr. classList.add("paciente");

    // Adiciona as tags na tela do usuário
    pacienteTr.appendChild(criarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(criarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(criarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(criarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(criarTd(paciente.imc, "info-imc"));

    return pacienteTr;   
}

function criarTd(dado, classe){
   const td = document.createElement("td");

   td.textContent = dado;
   td.classList.add(classe);

   return td;
   
}