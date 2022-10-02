let notification = document.querySelector(".number")
let markAll = document.querySelector("#mark")
let unread = document.querySelector(".posts")
let active = unread.querySelectorAll(".active")





let li = document.getElementsByTagName("li")


 console.log(li)

active.addEventListener("click", function(e){
    notification.textContent = "0"
    li.classList.toggle("dot")
   
    alert("kliknuto")
})