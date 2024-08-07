import { Personagem } from "./personagem.js";

export class Mago extends Personagem{
    elementoMagico
    levelMagico
    inteligencia
    static tipo = 'Mago'
    static descricao = 'Tadinho, não sabe com quem está lidando'

    constructor(nome, elementoMagico, levelMagico, inteligencia) {
        super(nome)
        this.elementoMagico = elementoMagico;
        this.levelMagico = levelMagico;
        this.inteligencia = inteligencia;
    }

    obterInsignia() {
        if (this.levelMagico >= 5 && this.inteligencia >= 5) {
            return `Mestre do(a) ${this.elementoMagico}`
        }
        return super.obterInsignia()
    }
}