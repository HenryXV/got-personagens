var campoFiltro = document.querySelector("#filtro-tabela");

    campoFiltro.addEventListener("input", function(){

        var personagens = document.querySelectorAll(".personagem");

        if( this.value.length > 0){
            var inputValue = this.value;
            personagens.forEach(function(personagem){
                var tdNome = personagem.querySelector(".info-nome");
                var nome = tdNome.textContent;
                var expressao = new RegExp(inputValue, "i");
                if( !expressao.test(nome) ){
                    personagem.classList.add("invisivel");
                }else{
                    personagem.classList.remove("invisivel");
                }
            });
        } else {
            personagens.forEach(function(personagem){
                personagem.classList.remove("invisivel");
            });
        };
    });
