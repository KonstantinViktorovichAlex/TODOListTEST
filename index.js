const inpTask = document.getElementById('task')
const buttonToDo = document.getElementById('goToDo')
const taskElement = document.getElementById('allTask')

const itemArray = []

function addElem () {
    const newTask = document.createElement('li')
    const buttonDelete = document.createElement('button')

    itemArray.push(inpTask.value)
    console.log(itemArray)
    localStorage.setItem('itemArray', JSON.stringify(itemArray))
    console.log(localStorage.getItem('itemArray'))

    newTask.innerHTML = `<li class="li_element"> ${inpTask.value}</li>`
    buttonDelete.innerText = 'delete'
    taskElement.append(newTask)
    taskElement.append(buttonDelete)
    inpTask.value = ''
        
    buttonDelete.addEventListener('click', () => {

        newTask.remove()
        buttonDelete.remove()
    })
    
    
}            

function start () {

    buttonToDo.addEventListener('click', addElem)
    inpTask.addEventListener('keyup', (event) => {

        if(event.key == 'enter' || event.keyCode == '13'){
            addElem()
        }
    })
    
}                

start();
