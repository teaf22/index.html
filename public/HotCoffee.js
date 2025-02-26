const Cooffee = [{
    g: `20g`,
    ml: `30ml - 20ml`
},{
    g: `25g`,
    ml: `300ml - 100ml`
},{
    g: `10g`,
    ml: `30ml - 20ml`
}
]
 
let btn = document.querySelector("#Hott");
let g = document.querySelector(".g");
let ml = document.querySelector(".ml");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* Cooffee.length);

    g.innerHTML = Cooffee[random].g;
    ml.innerHTML = Cooffee[random].ml;
})
