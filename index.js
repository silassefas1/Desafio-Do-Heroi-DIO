/* O projeto está conforme pedido, mas quis tratar uma exceção de forma diferente e adicionei uma brincadeira
   caso fosse informado um tipo de herói inválido. Espero que gostem :) */

class personagem{

    constructor(nome, idade, tipo){
        this.nome = nome.toLowerCase()
        this.idade = idade
        this.tipo = tipo.toLowerCase()
        this.tipoAtaque = ""
        if(this.tipo == "mago"){
            this.tipoAtaque = "Magia"
        }else if(this.tipo == "guerreiro"){
            this.tipoAtaque = "Espada"
        }else if(this.tipo == "monge"){
            this.tipoAtaque = "Artes Marciais"
        }else if(this.tipo == "ninja"){
            this.tipoAtaque = "Shuriken"
        }else{
            this.tipo = "aldeão"
            this.tipoAtaque = "um Rastelo"
        }
    }
    
    atacar(){
        if(this.tipo == "aldeão"){
            console.log(`Os deuses deste mundo não reconhecem sua classe, por isso voce foi classificado como ${this.tipo} e você atacou usando ${this.tipoAtaque} seu dano foi 0. `)
        }else{
            console.log(`O ${this.tipo} atacou usando ${this.tipoAtaque}`)
        }
        
    }
}

let heroiMago = new personagem("Silas", 25, "Mago")
let heroiGuerreiro = new personagem("Felipe", 29, "Guerreiro")
let heroinaMonge = new personagem("Thays", 26, "Monge");
let heroinaNinja = new personagem("Priscila", 26, "Ninja");
let heroiBobo = new personagem("Buble o Bobo", 27, "Dragão");


heroiMago.atacar()
heroiGuerreiro.atacar()
heroinaMonge.atacar()
heroinaNinja.atacar()
heroiBobo.atacar()