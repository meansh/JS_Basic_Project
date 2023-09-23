
/* This below code is for selecting only one element, i.e to display only
only one image*/
// var elem1 = document.querySelector('#elem1')
// var elemImage = document.querySelector('#elem1 img')

// elem1.addEventListener("mousemove", (dets)=> {
//     elemImage.style.left = dets.x + "px"
//     elemImage.style.top = dets.y + "px"
// })

// elem1.addEventListener("mouseenter", (dets)=> {
//     elemImage.style.opacity = 1
// })

// elem1.addEventListener("mouseleave", (dets)=>{
//     elemImage.style.opacity = 0
// })

//This below code is for selecting multiple elements in one go
var elem = document.querySelectorAll(".elem")

elem.forEach((val) => {
    
    val.addEventListener("mouseenter", ()=>{
        val.childNodes[3].style.opacity = 1 //3 is an index, in which image is present
    })
    val.addEventListener("mouseleave", ()=>{
        val.childNodes[3].style.opacity = 0
    })
    val.addEventListener("mousemove", (dets)=>{
        val.childNodes[3].style.left = dets.x + "px"
        //val.childNodes[3].style.top = dets.y + "px"
    })
})