const statuspers = document.getElementById('status-personagem')
const persContainer = document.getElementById('container')
const btn = document.getElementById('btn-enimy')


class Personagens{
    constructor(id,xp,classe,forca,agilidade,inteligencia,vitalidade){
        this.id = id
        this.classe = classe
        this.xp = xp
        this.forca = forca
        this.agilidade = agilidade
        this.inteligencia = inteligencia
        this.vitalidade = vitalidade
    }

}
const guerreiro = new Personagens(1,0,'Josias',1500,1000,800,1000)
const mago = new Personagens(1,0,'Mago',1500,1000,800,700,1000)
const ranger = new Personagens(1,0,'Ranger',1500,1000,800,700,1000)

persContainer.innerHTML = ` <p>id: ${guerreiro.id}<p/><br>
                            <p>Xp =  ${guerreiro.xp}<p/><br>
                            <p>Classe: ${guerreiro.classe}<p/><br>
                            <p> Força:${guerreiro.forca}<p/><br>
                            <p> Agilidade:${guerreiro.agilidade}<p/><br>
                            <p> Inteligencia:${guerreiro.inteligencia}<p/><br>
                            <p>Vitalidade: ${guerreiro.vitalidade}<p/><br>


`
















function Enimy(){
    for(let i = 0 ; i<3;i++){
        guerreiro.vitalidade -=201;
        statuspers.innerHTML += `Dano ${i +1} > Vitalidade do personagem: ${guerreiro.vitalidade} <br>` 
        
        
        
        
        if(guerreiro.vitalidade < 0){
            statuspers.innerHTML += `Começar de novo.! ${guerreiro.classe} Começe de novo.`
            i = 4
        }

    }


}



btn.addEventListener('click', ()=>{
    setTimeout(()=>{
        statuspers.innerHTML += `O ataque esta sendo carregado!!!   3...2...1<br>`
    },3000)

    setTimeout(()=>{
        Enimy()
    },5000)
    


})


