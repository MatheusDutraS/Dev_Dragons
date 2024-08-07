import { Personagem } from "./personagem.js"

export class Guerreiro extends Personagem {
    static tipo = 'Guerreiro'
    static descricao = 'Gosta de coisas relusentes? Então venha ver o brilho da minha espada'
    forca

    constructor(nome, forca) {
        super(nome)
        this.forca = forca
    }

    obterInsignia() {
        if (this.level >= 7 && this.forca > 5) {
            return 'Guerreiro furioso'
        }
        return super.obterInsignia()
    }
}