var botaoAdicionar = $("#adicionar-personagem");

botaoAdicionar.click(function(event) {
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");

    var personagem = obtemPersonagemDoForm(form);

    var personagemTr = montaTr(personagem);

    var erros = validaPersonagem(personagem);
    console.log(erros);

    if(erros.length > 0) {

        exibeMensagensDeErro(erros);
        return;
    }

    adicionaPersonagemNaTabela(personagem);

    var mensagensErro = document.querySelector("#mensagens-erro");

})

function obtemPersonagemDoForm(form) {

    var personagem = {

      nome: form.nome.value,
      vigor: form.vigor.value,
      defesa: form.defesa.value,
      armadura: form.armadura.value,
      saude: calculaSaude(form.vigor.value)

    }

    return personagem;
}

function montaTr(personagem) {

    var personagemTr = document.createElement("tr");
    personagemTr.classList.add("personagem");

    personagemTr.appendChild(montaTd(personagem.nome, "info-nome"));
    personagemTr.appendChild(montaTd(personagem.vigor, "info-vigor"));
    personagemTr.appendChild(montaTd(personagem.defesa, "info-defesa"));
    personagemTr.appendChild(montaTd(personagem.saude, "info-saude"));
    personagemTr.appendChild(montaTd(personagem.armadura, "info-armadura"));

    return personagemTr;
}

function montaTd(dado, classe) {

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function adicionaPersonagemNaTabela(personagem) {

  var personagemTr = montaTr(personagem);
  var tabela = $("#tabela-personagens");
  tabela.append(personagemTr);
}

function validaPersonagem(personagem) {

    var erros = [];

    if(personagem.nome.length == 0){
        erros.push("O nome do personagem não pode estar em branco!");
    }

    if(personagem.vigor.length == 0){
        erros.push("O vigor não pode estar vazio!");
    }

    if(personagem.defesa.length == 0){
        erros.push("A defesa não pode estar vazia!");
    }

    if(personagem.armadura.length == 0){
        erros.push("A armadura não pode estar vazia!");
    }

    return erros;
}

function exibeMensagensDeErro(erros){

    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro) {
      var li = document.createElement("li");
      li.textContent = erro;
      ul.appendChild(li);
    });
}
