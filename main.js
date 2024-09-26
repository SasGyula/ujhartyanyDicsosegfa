import { Kartya } from "./modell/Kartya.js";
import { EMBEREK } from "./adat.js";
import { Felugro } from "./modell/Felugro.js";
const felulet = $(".felulet")
const doboz = $(".doboz")

felulet.append("<div class=`row`>")
for(let i = 0; i<EMBEREK.length;i++){
    new Kartya(i,felulet, EMBEREK)
}
felulet.append("</div>")
$(window).on("katt",  ((event)=>{
    doboz.empty()
    let id = event.detail
    new Felugro(doboz,id,EMBEREK)
}))