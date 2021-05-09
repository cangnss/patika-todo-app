var task = document.querySelector('#task')
var list = document.querySelector('#list')

var closeButton = document.getElementsByClassName("close");

function changeText(){
    list.addEventListener('click',function(event){
        if(event.target.tagName === "li"){
            event.target.classList.add('checked');
        }
    })
}

function newElement(){
    const newTodo = task.value
    if(newTodo === ""){
        $('#liveToastFail').toast('show')
    }else{
        let liDOM = document.createElement('li')
        let close = document.createElement('span')
        close.innerText = "x"
        close.setAttribute('class','close')
        liDOM.innerHTML = `${newTodo}`
        liDOM.appendChild(close)
        list.appendChild(liDOM)
        $('#liveToastSuccess').toast('show')
        addLocalStorage(newTodo)
    }  

    for(var i=0;i<closeButton.length;i++){
        closeButton[i].onclick = function(){
            var div = this.parentElement
            div.style.display = "none"
        }
    }
}

function getTodos(){
    let todos = []
    if(localStorage.getItem('todos')===null){
        todos = []
    }else{
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
}

function addLocalStorage(newTodo){
    let todos = getTodos()
    todos.push(newTodo)
    localStorage.setItem('todos',JSON.stringify(todos))
}

list.addEventListener('click',function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle('checked');
    }
})