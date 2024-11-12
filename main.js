const form = document.getElementById('form-atvd');
const imgAprovado = '<img src="./images/Verificado.png" alt-"Verificado" />';
const imgReprovado= '<img src="./images/reprovado.jpg" alt-"reprovado" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado<span/>'
const spanReprovado = '<span class="resultado reprovado">Reprovado<span/>'
const notaMinima = parseFloat(prompt("Digite a Nota mínima: "));



let linhas = '';
form.addEventListener('submit',function(e){
    e.preventDefault();

    addLinha();
    atualizaTabela();
    atualizaMediaFinal();

})

function addLinha(){
    const inputNomeAtvd = document.getElementById('nome-atvd');
    const inputNotaAtvd = document.getElementById('nota-atvd');

    if(atividades.includes(inputNomeAtvd.value)){
        alert(`A atividade ${inputNomeAtvd.value} já foi inserida`);
    } else {
        atividades.push(inputNomeAtvd.value);
    notas.push(parseFloat(inputNotaAtvd.value));

    let linha = `<tr>`
    linha+=`<td>${inputNomeAtvd.value}</td>`;
    linha+=`<td>${inputNotaAtvd.value}</td>`;
    linha+=`<td>${inputNotaAtvd.value >=notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha+='</tr>';

    linhas += linha;

}
    inputNomeAtvd.value='';
    inputNotaAtvd.value='';
}


function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;

}

function atualizaMediaFinal(){
    const mediaFinal = calculaMediaFinal();

    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal>= notaMinima ? spanAprovado : spanReprovado;

}

function calculaMediaFinal(){
    let somaDasNotas = 0;

    for (let i = 0; i<notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length
}