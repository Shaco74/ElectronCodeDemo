const list = document.getElementById('todo-list');
const input = document.getElementById('todo-input');
const form = document.getElementById('todo-form')
const button = document.getElementById('todo-submit')


button.addEventListener('click', addTodo);
list.addEventListener('click', erledigtloeschen);
document.addEventListener('DOMContentLoaded', getTodos)

function addTodo(event){
    event.preventDefault();

    //div erstellen
    const listDiv = document.createElement('div');
    listDiv.classList.add('todo');
    listDiv.classList.add('output-box');

    //li erstellen
    const neuTodo = document.createElement('li')
    neuTodo.innerText = input.value;
    neuTodo.classList.add('todo-item');
    listDiv.appendChild(neuTodo);

    //todo lokal speichern
    speicherTodos(input.value);

    //erledigtButton
    const erledigtButton = document.createElement('button');
    erledigtButton.classList.add('erledigtButton');
    listDiv.appendChild(erledigtButton)

    //löschenButton
    const loeschenButton = document.createElement('button');
    loeschenButton.classList.add('loeschenButton');
    listDiv.appendChild(loeschenButton)

    //an Liste anhängen
    list.appendChild(listDiv);

    input.value = '';
}

function erledigtloeschen(event){
    event.preventDefault();

    const item = event.target;

    if(item.classList[0] === "loeschenButton"){
        const todo = item.parentElement; 
        //animation
        todo.classList.add('fallen');
        entferneTodo(todo);
        todo.addEventListener('transitionend', function(){
            todo.remove();
        })
    }

    if(item.classList[0] === "erledigtButton"){
        const todo = item.parentElement;
        todo.classList.toggle('erledigt');
    }
}

function speicherTodos(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos() {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    todos.forEach(function(todo){
        //div erstellen
    const listDiv = document.createElement('div');
    listDiv.classList.add('todo');
    listDiv.classList.add('output-box');

    //li erstellen
    const neuTodo = document.createElement('li')
    neuTodo.innerText = todo;
    neuTodo.classList.add('todo-item');
    listDiv.appendChild(neuTodo);


    //erledigtButton
    const erledigtButton = document.createElement('button');
    erledigtButton.classList.add('erledigtButton');
    listDiv.appendChild(erledigtButton)

    //löschenButton
    const loeschenButton = document.createElement('button');
    loeschenButton.classList.add('loeschenButton');
    listDiv.appendChild(loeschenButton)

    //an Liste anhängen
    list.appendChild(listDiv);
    });
}

function entferneTodo(todo) {
    let todos;
    if(localStorage.getItem('todos') === null){
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos')); 
    }
    const idx = todo.children[0].innerText;
    todos.splice(todos.indexOf(idx),1);
    localStorage.setItem("todos", JSON.stringify(todos));

}