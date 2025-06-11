class Personagem{
    constructor(id,classe,str,int,dex,luck,def,nome){
        this.id = id;
        this.classe = classe;
        this.str = str;
        this.def = def;
        this.int = int;
        this.dex = dex;
        this.luck = luck;
        this.nome = nome;
    }
    Blessed(){
        return `Parabéns: ${this.name} , Você está recebendo a Força Superior `
    }

}

const Guerreiro = new Personagem(1,"Guerreiro",1500,700,500,400,500, "pqdt12/1")
const Ranger = new Personagem(2,"Ranger",800,500,400,700,1500,"vencedor81989")

console.table(Guerreiro.Blessed())
console.table(Ranger)
console.table(Guerreiro)