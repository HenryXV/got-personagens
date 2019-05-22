var botaoCalcula = $("#calcula-dano");
var personagens = document.querySelectorAll(".personagem");
var spanDano = document.querySelector("#mostra-dano");
var nomePersonagem = document.querySelector("#personagem-atacado");
var danoCausado = document.querySelector("#dano-causado");

botaoCalcula.click(function(event) {
    event.preventDefault();

    var personagens = document.querySelectorAll(".personagem");

    var form = document.querySelector("#form-dano");
    var personagemAtacante = obtemPersonagemAtacanteDoForm(form);
    var dadosPersonagem = comparaNomePersonagem(personagens, personagemAtacante);
    var danoCalculado = calculaDano(dadosPersonagem, personagemAtacante);
    console.log(personagemAtacante, dadosPersonagem);

    spanDano.classList.remove("invisivel");
    nomePersonagem.textContent = personagemAtacante.nome;
    danoCausado.textContent = danoCalculado;

});

// Pega os dados do form para calcular o dano
function obtemPersonagemAtacanteDoForm(form){

    var personagemAtacante = {

      nome: form.nome.value,
      ataque: form.ataque.value,
      dano: form.dano.value
    }
    return personagemAtacante;
}

//Pega o nome do form e compara com os nomes da tabela, se houver
//algum correspondente, pega os dados desse personagem na tabela
function comparaNomePersonagem(personagens, personagemAtacante) {

    var dadosPersonagem = [];

    personagens.forEach(function(personagem){
        var tdNome = personagem.querySelector(".info-nome");
        var nome = tdNome.textContent;
        var nomeAtacado = personagemAtacante.nome;
        if(nomeAtacado === nome) {
          var dadosPersonagemComparado = {

              defesa: personagem.querySelector(".info-defesa").textContent,
              armadura: personagem.querySelector(".info-armadura").textContent,
              saude: personagem.querySelector(".info-saude").textContent
          }
          dadosPersonagem.push({dadosPersonagemComparado});
        };
    });
    return dadosPersonagem;
}

// resultados do dado de rolagem, vejo se é maior que a defesa em combate
// do atacado, se for vejo qual o grau de sucesso, multiplico o dano da arma
// pelo grau de sucesso, subtraio  o valor da armadura e depois subtrai da vida
function calculaDano(dadosPersonagem, personagemAtacante) {

  var defesa = dadosPersonagem[0].dadosPersonagemComparado.defesa;
  var saude = dadosPersonagem[0].dadosPersonagemComparado.saude;
  var armadura = dadosPersonagem[0].dadosPersonagemComparado.armadura;
  var ataque = personagemAtacante.ataque;
  var dano = personagemAtacante.dano;

    if(ataque >= defesa) {
      var ataqueSucesso = ataque -= defesa;
      console.log("O excedente de ataque foi: " + ataqueSucesso);
    }

    var grauDeSucesso = calculaGrauDeSucesso(ataqueSucesso);
    console.log("O grau de sucesso é: " + grauDeSucesso);

    var danoCalculado = calculoDoDano(dano, grauDeSucesso, armadura);
    console.log("O dano causado é: " + danoCalculado);

    return danoCalculado;

}

function calculoDoDano(dano, grauDeSucesso, armadura) {

    if(grauDeSucesso > 0) {
      var dano = (dano * grauDeSucesso) - armadura;
    } else {
      var dano = 0;
    }

    if(dano < 0) {
      var dano = 0;
    }

    return dano;
}

function calculaGrauDeSucesso(ataqueSucesso) {

    var grauDeSucesso = 0

    if(ataqueSucesso >= 0 && ataqueSucesso <= 4) {
      var grauDeSucesso = 1;
    }

    if(ataqueSucesso >= 5 && ataqueSucesso <= 9) {
      var grauDeSucesso = 2;
    }

    if(ataqueSucesso >= 10 && ataqueSucesso <= 14) {
      var grauDeSucesso = 3;
    }

    if(ataqueSucesso >= 15) {
      var grauDeSucesso = 4;
    }

    return grauDeSucesso;
}
