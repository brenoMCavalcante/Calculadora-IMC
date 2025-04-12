document.getElementById('clean-btn').style.display = 'none'
document.getElementById('result-imc-block').style.display = 'none'
const height = document.getElementById('height')
const weight = document.getElementById('weight')
const res = document.getElementById('result-h2')

function calcular() {
    if (height.value.length == 0 || weight.value.length == 0) {
        window.alert ('Erro: Preencha os campos')
    } else {
        const h = Number(height.value)
        const w = Number(weight.value)
        const heightM = h / 100
        const imc = w / (heightM * heightM)
        res.innerHTML = `${imc.toFixed(1)}`

        document.getElementById('clean-btn').style.display = ''

        if ( imc < 16 ) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Abaixo do Peso (Severo)'
            document.getElementById('result-imc-block-p').innerText = 'Abaixo de 16'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid yellow'
        } else if ( imc >= 16 && imc <= 16.9) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Abaixo do Peso (Moderado)'
            document.getElementById('result-imc-block-p').innerText = 'De 16 até 16,9'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid yellow'
        } else if ( imc >= 17 && imc <=18.4) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Abaixo do Peso (Leve)'
            document.getElementById('result-imc-block-p').innerText = 'De 17 até 18,4'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid yellow'
        } else if ( imc > 18.4 && imc <= 24.9) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Normal / Eutrófico'
            document.getElementById('result-imc-block-p').innerText = 'De 18,4 até 24,9'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid green'
        } else if ( imc >= 25 && imc <= 29.9) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Pré-Obesidade / Sobrepeso'
            document.getElementById('result-imc-block-p').innerText = 'De 25 até 29,9'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid orange'
        } else if ( imc >= 30 && imc <= 34.9) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Obesidade Grau I'
            document.getElementById('result-imc-block-p').innerText = 'De 30 até 34,9'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid orangered'
        } else if ( imc >= 35 && imc <= 39.9) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Obesidade Grau II'
            document.getElementById('result-imc-block-p').innerText = 'De 35 até 39,9'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid orangered'
        } else if (imc >= 40 && imc <= 185) {
            document.getElementById('result-imc-block').style.display = ''
            document.getElementById('result-imc-block-h3').innerText = 'Obesidade Grau III'
            document.getElementById('result-imc-block-p').innerText = '40 ou Acima'
            document.getElementById('result-imc-block').style.borderBottom = '10px solid red'
        } else {
            window.alert('ERRO')
            document.getElementById('clean-btn').style.display = 'none'
            res.innerHTML = '0'
            weight.value = ''
            height.value = ''
        }
    } 
}

function limpar() {
    res.innerHTML = '0'
    weight.value = ''
    height.value = ''

    document.getElementById('clean-btn').style.display = "none"
    document.getElementById('result-imc-block').style.display = 'none'
    document.getElementById('result-imc-block').style.display = 'none'

}