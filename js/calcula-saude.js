var personagens = document.querySelectorAll(".personagem");

personagens.forEach(function(personagem){
    var vigorTd = personagem.querySelector(".info-vigor");
    var saudeTd = personagem.querySelector(".info-saude");

    var vigor = vigorTd.textContent;

    var saude = calculaSaude(vigor);
    saudeTd.textContent = saude;

});

function calculaSaude(vigor) {
    var saude = 0;

    saude = vigor * 3;

    return saude.toFixed(.1);
}
