var main = document.querySelector('#main')
var crsr = document.querySelector(".cursor")

crsr.style.backgroundColor = "green"

main.addEventListener("mousemove", (dets)=> {
    crsr.style.left = dets.x + "px"
    crsr.style.top = dets.y + "px"
})