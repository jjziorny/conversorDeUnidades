const inputElement = document.querySelector("#input");//Seleciona o elemento do Dom com o id input(insere o valor a ser convertido)
const fromElement = document.querySelector("#from");//Seleciona o elemento de selção(from) escolher a unidade de origem da posição
const toElement = document.querySelector("#to");//Seleciona a unidade pelo qual ele deseja converter
const outputElement = document.querySelector("#output");//dados de saida
const convertButton = document.querySelector("#convert-btn");//conversao(botao)
const messageElement = document.querySelector("#message");//aca

function convert(){//função de conversão, realiza a conversão quando o usuário clicar

const fromValue = fromElement.value//obtém o valor da unidade de origem dropdown from
const toValue = toElement.value;//obtém o valor da unidade de destino

if(fromValue === toValue){//verfica se a unidade de origemm é igual a unidade de destino.(se for igual, o valor é replicado) e afunção retorna sem fazer mais calculos
    outputElement.value = inputElement.value;//mostra o mesmo resultado
messageElement.textContent = "";//Mostra a mensagem 
return;//retorno da mensagem 
}

//converter a entrada para metros, independente do que o usuário selecionou

let meters;//declara a variável(entrada)

switch(fromValue){
    case "m":
        meters = inputElement.value;
        break;
        case "km":
        meters = inputElement.value * 1000;
        break;
        case "cm":
        meters = inputElement.value / 100;
        break;
        case "mm":
        meters = inputElement.value / 1000;
        break;
        

}

//Converter metros para a unidade de saida
let result;
switch(toValue){
    case "m":
        result = meters;
        break;
        case "km":
       result = meters / 1000;
        break;
        case "cm":
      result = meters * 100;
        break;
        case "mm":
        result = meters * 1000;
        break;
        


    }

    //Exibir resultados
output.value = result.toFixed(2);//formata para entrar duas casas decimais com toFixed(2);


//Exibir resultados na mensagem 
const fromLabel = fromElement.options[fromElement.selectedIndex].text;//obtém o textos das unidade selecionadas para exibir uma mensagem mais legível e informativa sobre a conversão realizada
const toLabel = toElement.options[toElement.selectedIndex].text;
const message = `${
    inputElement.value
} ${fromLabel} equivalem a ${result.toFixed(2)} ${toLabel}`;
//mostra a mensagem informando quantas unidades de origem equivalem às de destino

messageElement.textContent = message;// define o texto da mensagem criada, informando o resultado


}

convertButton.addEventListener("click", convert);// Ativando a conversão, para executar a função quando o converter for clicado

