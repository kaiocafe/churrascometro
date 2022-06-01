let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")
let resultado = document.getElementById("resultado")

function calcular() {
    console.log("calculando");

    let adultos = inputAdultos.value
    let criancas = inputCriancas.value
    let duracao = inputDuracao.value


    let qdtCarne = (carnePP(duracao) * adultos) + (carnePP(duracao)/2* criancas)
    let qdtLinguica = (linguicaPP(duracao) * adultos) + (linguicaPP(duracao)/2* criancas)
    let qdtFrango = (frangoPP(duracao) * adultos) + (frangoPP(duracao)/2* criancas)
    let qdtCerveja = (cervejaPP(duracao) * adultos) 
    let qdtBebida = (bebidasPP(duracao) * adultos) + (bebidasPP(duracao)/2* criancas)
 

    resultado.innerHTML = `<p>${qdtCarne/1000} Kg de carne </p>`
    resultado.innerHTML += `<p>${qdtLinguica/1000} Kg de linguiça </p>`
    resultado.innerHTML += `<p>${qdtFrango/1000} Kg de frango </p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtCerveja/355)} Latas (355ml) de cerveja </p>`
    resultado.innerHTML += `<p>${qdtBebida/1000} litros de bebida </p>`




}

function carnePP(duracao) {
    if(duracao>=3){
        return 650
    }
    else{
        return 500
    }
}

function cervejaPP(duracao) {
    if(duracao>=3){
        return 3000
    }
    else{
        return 2000
    }
}

function bebidasPP(duracao) {
    if(duracao>=3){
        return 1500
    }
    else{
        return 1000
    }
}

function linguicaPP(duracao) {
    if(duracao>=3){
        return 150
    }
    else{
        return 110
    }
}

function frangoPP(duracao) {
    if(duracao>=3){
        return 120
    }
    else{
        return 100
    }
}
