const coffee = [{
    g: `20g`,
    ice: `150g`,
    ml: `20ml - 60ml - 90ml - 120ml - 150ml`
}, {
    g: `25g`,
    ice: `200g`,
    ml: `first 12.5g - 35ml - 75ml - Add the other 12.5g 130ml - 170ml`
} , {
    g: `20g`,
    ice: `150g`,
    ml: `40ml - 90ml - 150ml`
} ,{
    g: `25g`,
    ice: `180g`,
    ml: `50ml - 120ml - 180ml`
},]

let btn = document.querySelector("#icee");
let g = document.querySelector(".g");
let ice = document.querySelector(".ice");
let ml = document.querySelector(".ml");

btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()* coffee.length);

    g.innerHTML = coffee[random].g;
    ice.innerHTML = coffee[random].ice;
    ml.innerHTML = coffee[random].ml;
})