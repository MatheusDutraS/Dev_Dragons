import { Personagem } from "./personagem.js"

export class Arqueiro extends Personagem {
    static tipo = 'Arqueiro'
    destreza
    static descricao = 'Não adianta correr, minha flecha vai te pegar'

    constructor (nome, destreza) {
        super(nome)
        this.destreza = destreza
    }

    obterInsignia() {
        if (this.destreza >= 5) {
            return `Dominador de flechas`
        }
        return super.obterInsignia()
    }
}