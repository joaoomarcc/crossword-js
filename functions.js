//atribuição das palavras às variáveis
let words=[]

//addPalavra
document.getElementById('addPalavra').addEventListener('click', function(){
    const res = window.prompt('Qual palavra você deseja adicionar no caça-palavras?');
    if (res !== null) {
        window.alert (res+' foi adicionado com sucesso!')
        words.push(res)
    }
})

//clearWords
document.getElementById('clearWords').addEventListener('click', function(){
    const res = window.confirm('Você realmente deseja limpar todas as palavras?');
    if (res !== false) {
        window.alert ('As palavras foram limpas com sucesso!')
        words=[]
    }
})

//clearLastword
document.getElementById('clearLastword').addEventListener('click', function(){
    const res = window.confirm('Você realmente deseja a última palavra adicionada?');
    if (res !== false) {
        const lastWord = words.pop()//words[words.lenght-1]
        window.alert (`A palavra ${lastWord} foi limpa com sucesso!`)

    }
})

//transformação dos dados da array words para letras maiusculas
