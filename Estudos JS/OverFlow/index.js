const testeClasse = document.getElementById("testeClasse")

class Personagens{
    constructor(nome,preco,power){
        this.nome = nome;
        this.preco = preco;
        this.power = power
    }
    Nome(){
        console.log(this.nome)
    };
    Valor(){
        console.log(this.preco)
    };
}


const pers1 = new Personagens('maria',10000000,1500)



testeClasse.innerHTML += `<div>
                            <p>${pers1.nome}</p>
                            <p>${pers1.preco}</p>
                            <p>${pers1.power}</p>




</div>`



