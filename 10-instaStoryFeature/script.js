var arr = [
    {
        dp: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8bW9kZWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60",
        story: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        story: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"  
    },
    {
        dp:"https://images.unsplash.com/photo-1513379733131-47fc74b45fc7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1687814882714-711709cc9bee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTJ8ODg2MjYzNXx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
        story:"https://plus.unsplash.com/premium_photo-1673757121102-0ca51260861f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80"
    },
    {
        dp:"https://images.unsplash.com/photo-1504434026032-a7e440a30b68?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NXw4ODYyNjM1fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1532703321856-d512f3613d54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NHw4ODYyNjM1fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    },
    {
        dp:"https://images.unsplash.com/photo-1692997262177-dfe37b3efd66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8Nnw4ODYyNjM1fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60",
        story:"https://images.unsplash.com/photo-1687777238205-d7c572cde6cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MTF8ODg2MjYzNXx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60"
    },

]

var storiyan = document.querySelector('#storiyan')
var clutter = ""
arr.forEach((ele, index)=>{
    clutter += `<div class="story">
                <img id="${index}" src="${ele.dp}" alt="">
                </div>`
})
document.querySelector("#storiyan").innerHTML = clutter 

storiyan.addEventListener("click", (dets)=>{
    document.querySelector("#full-screen").style.display = "block"
    document.querySelector("#full-screen").style.backgroundImage = 
    `url(${arr[dets.target.id].story})`
    
    setTimeout(()=>{
        document.querySelector('#full-screen').style.display = "none"
    }, 3000)

 })




