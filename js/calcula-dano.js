// resultados do dado de rolagem, vejo se é maior que a defesa em combate
// do atacado, se for vejo qual o grau de sucesso, multiplico o dano da arma
// pelo grau de sucesso, subtraio  o valor da armadura e depois subtraio da vida

var defesa = dadosPersonagem[0].dadosPersonagemComparado.defesa;
var saude = dadosPersonagem[0].dadosPersonagemComparado.saude;
var armadura = dadosPersonagem[0].dadosPersonagemComparado.armadura;
var ataque = personagemAtacante.ataque;
var dano = personagemAtacante.dano;

var grauDeSucesso = calculaGrauDeSucesso(ataqueSucesso);
console.log("O grau de sucesso é: " + grauDeSucesso);


function calculaDano(dadosPersonagem, personagemAtacante) {

    if(ataque >= defesa) {
      var ataqueSucesso = ataque -= defesa;
      console.log(ataqueSucesso);
    }

    return ataqueSucesso;
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
