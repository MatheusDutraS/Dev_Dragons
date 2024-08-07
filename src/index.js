import { Personagem } from "./modules/personagem.js"
import { PersonagemView } from "./components/personagem-view.js";
import { Mago } from "./modules/mago.js";
import { Arqueiro } from "./modules/arqueiro.js";
import { ArqueiroMago } from "./modules/arqueiro-mago.js";
import { Guerreiro } from "./modules/guerreiro.js";

const magaCalisiene = new Mago('Calisiene', 6, 'Gelo', 7, 5);

const arqueiroJoelington = new Arqueiro('Joelington', 7, 8)

const arqueiroMagoChico = new ArqueiroMago('Chico', 7, 'vento', 5, 8)

const guerreiroJorge = new Guerreiro('Jorge', 7)

const personagens = [magaCalisiene, arqueiroJoelington, arqueiroMagoChico, guerreiroJorge]

new PersonagemView(personagens).render()