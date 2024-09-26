import { Kartya } from "./modell/Kartya.js";

const felulet = $(".felulet")

felulet.append("<div class=`row`>")
for(let i = 0; i<3;i++){
    new Kartya(i,felulet)
}
felulet.append("</div>")