const calcular = document.getElementById('calcular');

function imc() {
    const nome = document.getElementById('nome').value;
    const altura = document.getElementById('altura').value;
    const peso = document.getElementById('peso').value;
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {

        const valorIMC = (peso / (altura * altura)).toFixed(1);

        let classificacao = '';

        if (valorIMC < 18.5) {
            classificacao = 'abaixo do peso.';
        } else if (valorIMC < 25) {
            classificacao = 'com peso ideal. <br>Parabéns!!!';
        } else if (valorIMC < 30) {
            classificacao = 'levemente acima do peso.';
        } else if (valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III.<br>Cuidado!!';
        }

        resultado.innerHTML = `${nome},<br>Seu IMC é ${valorIMC}.<br>Você está ${classificacao}`;
        resultado.style.color = 'black';
        resultado.style.fontSize = '1.3em';
        resultado.style.textAlign = 'justify';

    } else {
        resultado.textContent = 'Preencha todos os campos!!!';
        resultado.style.fontSize = '1.6em';
        resultado.style.color = 'red';
        resultado.style.textAlign = 'center';


    }
}

calcular.addEventListener('click', imc);
