let nomes = [];

function _limparTudo() {
    _limparCampos();
    _limparResultado();
}

function _limparCampos() {
    var nome = document.getElementById("nome");
    nome.value = "";
    var idade = document.getElementById("idade");
    idade.value = "";
    var email = document.getElementById("email");
    email.value = "";
    var btn_alterar = document.getElementById("alterar");
    var b_exclui = document.getElementById("exclui");
    b_exclui.style.display = 'none';
    btn_alterar.style.display = 'none';
}

function _limparResultado() {
    var res = document.getElementById("resposta");
    res.innerHTML = "";
    var lbl_busca = document.getElementById("lbl-busca");
    lbl_busca.innerHTML = "";
    var lb_nome = document.getElementById("lbl-nome");
    var lb_idade = document.getElementById("lbl-idade");
    var lb_email = document.getElementById("lbl-email");       
    var novo_nome = document.getElementById("novo_nome");
    var novo_idade = document.getElementById("nova_idade");
    var novo_email = document.getElementById("novo_email");
    novo_nome.value = "";
    novo_idade.value = "";
    novo_email.value = "";

    lb_nome.style.display = 'none';
    novo_nome.style.display = 'none';
    lb_idade.style.display = 'none';
    novo_idade.style.display = 'none';
    lb_email.style.display = 'none';
    novo_email.style.display = 'none';
}

function _mostra_vetor() {

    var res = document.getElementById("resposta");

    res.innerHTML = "<h3>Retorno do vetor</h3>";

    for (var i = 0; i < nomes.length; i++) {
        res.innerHTML += `${i+1} - ${nomes[i][0]} - ${nomes[i][1]} - ${nomes[i][2]} <br>`;
    }
}

function _push() {

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    nomes.push([nome, idade, email]);
    _limparTudo();
    _mostra_vetor();
}

function _pop() {

    nomes.pop();
    _mostra_vetor();
}

function _unshift() {

    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;

    nomes.unshift([nome, idade]);
}

function _shift() {

    nomes.shift();
    _mostra_vetor();
}

function _sort() {

    nomes.sort();
    _mostra_vetor();
}

function _procura() {
    var lbl_busca = document.getElementById("lbl-busca");
    var res = document.getElementById("resposta");
    var nome = document.getElementById("nome").value;
    var b_exclui = document.getElementById("exclui");
    var btn_alterar = document.getElementById("alterar");
    var lb_nome = document.getElementById("lbl-nome");
    var lb_idade = document.getElementById("lbl-idade");
    var lb_email = document.getElementById("lbl-email");       
    var novo_nome = document.getElementById("novo_nome");
    var novo_idade = document.getElementById("nova_idade");
    var novo_email = document.getElementById("novo_email");

    _limparResultado();

    _nome = nomes.map(function(x) { return x[0] });
    indice = _nome.indexOf(nome);
    lbl_busca.style.display = 'block';
    if (indice < 0) {
        lbl_busca.innerHTML = `Pessoa <strong>não</strong> encontrada<br>`;
    } else {
        lbl_busca.innerHTML = `<br><strong>Achei a pessoa em: </strong>${indice}<br><br>`;
        
        b_exclui.style.display = 'inline';
        btn_alterar.style.display = 'inline';
        lb_nome.style.display = 'block';
        novo_nome.style.display = 'block';
        lb_idade.style.display = 'block';
        novo_idade.style.display = 'block';
        lb_email.style.display = 'block';
        novo_email.style.display = 'block';
        
        novo_nome.value = `${nomes[indice][0]}`;
        novo_idade.value = `${nomes[indice][1]}`;
        novo_email.value = `${nomes[indice][2]}`;
    }
}

function _exclui() {

    var nome = document.getElementById("nome").value;
    var b_exclui = document.getElementById("exclui");
    var btn_alterar = document.getElementById("alterar");


    _nome = nomes.map(function(x) { return x[0] });
    indice = _nome.indexOf(nome);

    if (indice < 0) {
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {
        nomes.splice(indice, 1);
        b_exclui.style.display = 'none';
        btn_alterar.style.display = 'none';
    }
    _mostra_vetor();
}

function _alterar() {
    var res = document.getElementById("resposta");    
    var nome = document.getElementById("nome").value;
    var idade = document.getElementById("idade").value;
    var email = document.getElementById("email").value;

    var btn_alterar = document.getElementById("alterar");
    var btn_exclui = document.getElementById("exclui");
    var lb_nome = document.getElementById("lbl-nome");
    var lb_idade = document.getElementById("lbl-idade");
    var lb_email = document.getElementById("lbl-email");       
    var novo_nome = document.getElementById("novo_nome").value;
    var novo_idade = document.getElementById("nova_idade").value;
    var novo_email = document.getElementById("novo_email").value;

    _nome = nomes.map(function(x) { return x[0] });
    indice = _nome.indexOf(nome);
    if (indice < 0) {
        res.innerHTML += 'Pessoa <strong>não</strong> encontrada<br>';
    } else {
        nomes.splice(indice, 1, [novo_nome, novo_idade, novo_email]);

        _limparTudo();
        _mostra_vetor();
    }

    

}