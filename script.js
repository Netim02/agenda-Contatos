const form = document.getElementById('form-agenda');
let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault(e);  

    addLinhas();
    atualizarTabela();
});

function addLinhas(){
    const nomeContato = document.getElementById('nome');
    const numeroContato = document.getElementById('numero');

    let linha = '<tr>';
    linha += `<td>${numeroContato.value}</td>`;
    linha += `<td>${nomeContato.value}</td>`;
    linha += '</td>';

    linhas +=linha;

    nomeContato.value = "";
    numeroContato.value = "";
}

function atualizarTabela(){
    const bodyTable = document.querySelector('tbody');
    bodyTable.innerHTML = linhas;
}


