

export class Kartya{
    #szuloElem
    #gombElem
    #id
    #lista
    constructor(id,szuloElem, lista){
        this.#id = id
        this.#szuloElem = szuloElem 
        this.#lista = lista
        console.log(this.#gombElem)
        this.#megjelenit()
        this.#gombElem = this.#szuloElem.children("div:last-child")
        this.#gombElem.on("click", ()=>{
            this.#kattintasEsemeny("katt")
            this.#togglePopup()
        })
       
    }
    #megjelenit(){
        let txt = 
        `<div class="col-md-2 circle"><img src="${this.#lista[this.#id].kep}" alt=""></div>`
        this.#szuloElem.append(txt)
    }
    #kattintasEsemeny(esemenynev){
        console.log(this.#id)
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e)
        
    }
    #togglePopup() {
        $(".doboz").toggle();
    }
}