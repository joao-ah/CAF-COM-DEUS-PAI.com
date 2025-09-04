//muda o nome a partir do seletor de classe
var subtitulo = document.querySelector(".gege");
pacientes.textContent  = "Meus pacientes";
var aparecida = document.querySelector(".baba");
aparecida.textContent = "Café com Deus pai Nutrições";
subtitulo.textContent = "Meus pacientes" ;
//acessar a tag tr - paciente Paulo
var paciente = document.querySelectorAll(".paciente");

for (var i = 0; i < paciente,length; i++){
    var tdPeso = paciente.querySelector(".info-peso");

    var peso = tdPeso.textContent;
    
    var tdAltura = paciente.querySelector(".info-altura");
    
    var altura = tdAltura.textContent;
    
    //acessa e altera o imc
    var imc = peso / (altura * altura);
    var tdImc = paciente.querySelector(".info-imc");
    tdImc.textContent = imc;
    
    //variaveis com valor true                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    var pesoValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 1000){
        alert("Peso inválido")
        var pesoValido = false;
        tdImc.textContent = "Peso inválido";
    }
    if(altura <= 0 || altura >= 4.00){
        alert("Altura inválida")
        var alturaValida = false;
        tdImc.textContent = "Altura inválida";
        
    }
    
    if(pesoValido && alturaValida){
        var tdImc = paciente.querySelector(".info-imc");
        tdImc.textContent = imc;    
    }

}

