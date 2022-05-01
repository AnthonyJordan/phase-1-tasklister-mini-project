document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.getElementById("create-task-form")
  form.addEventListener("submit", (e) => {
    e.preventDefault()
    buildToDo(e.target["new-task-description"].value)
  })

  function buildToDo(toDo) {
    let p = document.createElement('p')
    let btn = document.createElement('button')
    btn.addEventListener('click', handleDelete)
    btn.textContent = 'x'
    p.textContent = `${toDo} `
    p.appendChild(btn)
    document.getElementById('tasks').appendChild(p)
  }

  function handleDelete(e) {
    e.target.parentNode.remove()
  }

});
