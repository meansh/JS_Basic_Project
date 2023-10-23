let x, y;
let px, py;
px = py = 0;


let cursor = document.getElementById("cursor")

let b1 = document.getElementById("b1")

let b2 = document.getElementById("b2")

let mutex = false

window.addEventListener("mouseup", ()=>{
    let tmp = document.elementFromPoint(x + px, y + py)
    mutex = true
    tmp.click()
    cursor.style.left = (px + x) + "px"
    cursor.style.top = (py + y) + "px"
})

window.addEventListener("mousemove", (e)=>{
    x = e.clientX
    y = e.clientY
    // console.log(x)
    // console.log(y)

    cursor.style.left = (px + x) + "px"
    cursor.style.top = (py + y) + "px"
})

b1.onclick = ()=> {
    if (mutex) {
        mutex = false
        px = b2.offsetLeft - x
        py = b2.offsetTop - y
    }


b2.onclick = ()=> {
    if(mutex) {
        mutex = false
        px = b1.offsetLeft - x
        py = b1.offsetTop - y
    }
}}
