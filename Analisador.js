let num = document.querySelector('input#fnun')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n) { //verificando se N é um numero
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) { //agora quero verificar se o número está na lista
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) { //! = não
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = '' //se tiver um resultado, para add um novo elemento ele apagará o resultado Aí será necessário clicar no 'finalizar' novamente
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = '' //para apagar depois que eu coloco os números, para ficar mais automatizado
    num.focus()
}

function finalizar() {
    if(valores.length == 0) {
        window.alert ('Adicione valores antes de finalizar!')
    } else {
        let tot = valores.length
        let maior = valores [0] //O maior sempre começa como o 1º valor (ou seja, a posição 0)
        let menor = valores [0] //o menor valor tbm sempre é o 1º a ser add
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior)
                maior = valores [pos]
            if(valores[pos] < menor)
                menor = valores [pos]
        }
        media = soma / tot

        res.innerHTML = '' //começa zerando o valor
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
        res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
        res.innerHTML += `<p>A soma dos valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}