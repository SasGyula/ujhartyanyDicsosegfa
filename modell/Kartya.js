export class Kartya{
    #szuloElem
    #gombElem
    #id
    constructor(id,szuloElem){
        this.#id = id
        this.#szuloElem = szuloElem 
        console.log(this.#gombElem)
        this.#megjelenit()
        this.#gombElem = this.#szuloElem.children("div:last-child")
        this.#gombElem.on("click", ()=>{
            this.#kattintasEsemeny("katt")
        })
       
    }
    #megjelenit(){
        let txt = `
        <div class="col-md-2 circle"><img src="kepek/torus-2789639_640.webp" alt=""></div>
        `
        this.#szuloElem.append(txt)
    }
    #kattintasEsemeny(esemenynev){
        console.log(this.#id)
        const e = new CustomEvent(esemenynev, {detail:this.#id})
        window.dispatchEvent(e)
        this.#togglePopup()
    }
    #togglePopup() {
        $(".doboz").toggle();
    }
}