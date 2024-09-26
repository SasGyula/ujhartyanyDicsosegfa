export class Felugro{
    #szuloElem
    #id
    #lista
    constructor(szuloElem, id, lista){
        this.#szuloElem = szuloElem
        this.#id = id
        this.#lista = lista
        this.#megjelenit()
    }
    #megjelenit(){
        this.#szuloElem.append(
            `<h1>${this.#lista[this.#id].nev}</h1>
            <img src="${this.#lista[this.#id].kep}" alt="" class="kep">
            <p>${this.#lista[this.#id].leiras}</p>
            `
        )
    }
}