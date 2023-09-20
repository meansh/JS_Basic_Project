var isStatus = document.querySelector("h5")
var btn = document.querySelector("#add")
var removeFriend = document.querySelector('#remove')

var check = 0
btn.addEventListener("click", function() {
    if(check == 0) {
        isStatus.innerHTML = "Friends"
        isStatus.style.color = "green"
        btn.innerHTML = "Remove Friend"
        check = 1
    }else {
        isStatus.innerHTML = "Stranger"
        isStatus.style.color = "red"
        btn.innerHTML = "Add Friend"
        check = 0
    }
})

/*removeFriend.addEventListener("click", function() {
    isStatus.innerHTML = "Stranger"
    isStatus.style.color = "red"
})*/