let notification = document.querySelector(".number")
let number = Number(notification.innerText)
let markAll = document.querySelector("#markAll")
let persons = document.querySelectorAll(".person.unread")


// mark all as readed
markAll.addEventListener("click", function(event){
  console.log(event)
  notification.textContent = "0"
  for ( let active of persons) {
    active.classList.remove("unread")
  }
})

// select a single unread post
persons.forEach(person => {
  person.addEventListener("click", function(event){
    notification.textContent = number -1
      number = notification.textContent
        if (number <= 0){
          number = 1
    }
    person.classList.remove("unread")
   
  })
})
