const btNovo = document.querySelector('main button');
const btSalvar = document.querySelector('form button');
const modal = document.querySelector('div');
const dados = [];


let sequencial = 0;
 
btNovo.addEventListener('click', () => {
    modal.classList.add('mostrarModal');
    // const nome = document.querySelector('#nome');
    // const idade = document.querySelector('#idade');
    // nome.value = '';
    // idade.value = '';
})




function desenhaTabela(){
    const tbody =  document.querySelector('tbody');
    tbody.innerHTML = '';
    for (let i = 0; i < dados.length; i++) {
        const tr = document.createElement('tr');

        const td1 = document.createElement('td');
        const td2 = document.createElement('td');
        const td3 = document.createElement('td');
        const td4 = document.createElement('td');

        td1.innerText = dados[i].seq;
        td2.innerText = dados[i].nome;
        td3.innerText = dados[i].idade;

        tr.append(td1, td2, td3, td4);

        tbody.append(tr);

        var btApagar = document.createElement('button');
        btApagar.innerText = 'Apagar';

        btApagar.addEventListener('click', (event) =>{
            event.currentTarget.parentNode.parentNode.remove();
        })
        
        td4.append(btApagar);  
    }
}

btSalvar.addEventListener('click', (event) => {
    event.preventDefault();

    const registro = {
        seq: sequencial,
        nome: document.querySelector('#nome').value,
        idade: document.querySelector('#idade').value
    };
    dados.push(registro);
    desenhaTabela();
    document.querySelector('form').reset();
    sequencial = dados.length;
    // console.log(dados);


    /*
    const tr = document.createElement('tr');

    const td1 = document.createElement('td');
    const td2 = document.createElement('td');
    const td3 = document.createElement('td');
    const td4 = document.createElement('td');

    td1.innerText = sequencial;
    sequencial++;

    td2.innerText = document.querySelector('#nome').value;
    td3.innerText = document.querySelector('#idade').value;

   
    let btApagar = document.createElement('button');

    btApagar.addEventListener('click', (event) =>{
        alert(event.target.parentNode.parentNode.remove)
    })

    td4.append(btApagar);
    tr.append(td1, td2, td3, td4);

    

    document.querySelector('tbody').append(tr);
    */

    // Criar um botão no campo ação, ao clicar  no botão ele removerá a linha
    

    modal.classList.remove('mostrarModal');
})

