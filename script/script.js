const form1 = document.forms[0]
const form2 = document.forms[1]
let taskToPass = ""
let newTaskValue = null
let taskToreplace = null
const list = document.getElementById("ul-list")
form1.addEventListener("submit", (e) => {
  e.preventDefault()
  const newTask = document.getElementById("new-task")
  newTaskValue = newTask.value
  const taskToAdd = document.createElement("li")
  taskToAdd.classList.add(`${newTaskValue}`)
  taskToAdd.innerHTML = `
  ${newTaskValue} &emsp; <i class="fas fa-trash-alt"></i> <i class="fas fa-pencil-alt"></i>
  `
  list.appendChild(taskToAdd)
  taskToAdd.addEventListener("click", () => {
    taskToAdd.setAttribute("class", "completed")
  })

  form1.reset()
  let allDeleteTheButons = document.querySelectorAll(".fa-trash-alt")
  allDeleteTheButons.forEach((button) => {
    button.addEventListener("click", (e) => {
      const taskToRemove = e.target.parentElement
      console.log(taskToRemove)
      taskToRemove.remove()
    })
  })
  let AllmodifyButtons = document.querySelectorAll(".fa-pencil-alt")
  AllmodifyButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      taskToreplace = e.target.parentElement
      form2.classList.add("visible")
      form1.classList.remove("visible")
      form1.classList.add("hidden")
    })
  })
  form2.addEventListener("submit", (e) => {
    e.preventDefault()
    let stringToPass = document.getElementById("mod-task").value
    console.log(stringToPass, "sono to replace")
    taskToreplace.innerHTML = `
  ${stringToPass} &emsp; <i class="fas fa-trash-alt"></i> <i class="fas fa-pencil-alt"></i>
  `
    taskToreplace.classList.remove("completed")
    form2.classList.remove("visible")
    form1.classList.add("visible")
    form2.classList.add("hidden")
  })
  form2.reset()
})
