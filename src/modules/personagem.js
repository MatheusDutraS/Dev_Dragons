export class Personagem {
    nome
    vida = 100
    mana = 100
    #level

    constructor(nome) {
        this.nome = nome;
        this.#level = 1;
    }

    aumentarLevel() {
        this.level += 1
    }

    diminuirLevel() {
        this.level -= 1
    }

    set level(novoLevel) {
        if(novoLevel >= 1 && novoLevel <= 10) {
            this.#level = novoLevel
        }
    }

    get level() {
        return this.#level
    }

    obterInsignia() {
        if (this.#level >= 5) {
            return `${this.constructor.tipo} Implacável`
        }

        return `${this.constructor.tipo} Iniciante`
    }

    static verificarVencedor(personagem1, personagem2) {
        if (personagem1.level === personagem2.level) {
            return 'Empate'
        } else if (personagem1.level > personagem2.level) {
            return `${personagem1.constructor.tipo} ${personagem1.nome} é o vencedor`
        } else {
            return `${personagem2.constructor.tipo} ${personagem2.nome} é o vencedor`
        }
    }
}