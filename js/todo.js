const toDoForm = document.querySelector("#todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let toDos = [];
const TODOS_KEY = "todos"
const TODOS_MAX = 3;

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = newTodo.id;

    // const check = document.createElement('input');
    // check.setAttribute("type", "checkbox");
    const span = document.createElement("span");
    const button = document.createElement("button");

    span.innerText = newTodo.text;
    button.innerText = "X";
    
    // li.appendChild(check);
    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);

    button.addEventListener("click", deleteToDo);    
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
    saveToDos();
}

function handleToDoSbumit(event) {
    event.preventDefault();

    if(toDos.length < TODOS_MAX) {
        const newTodo = toDoInput.value;

        toDoInput.value = "";

        const newTodoObject = {
            text : newTodo,
            id : Date.now()
        };

        toDos.push(newTodoObject);
        paintToDo(newTodoObject);
        saveToDos();
    }
    else {
        alert("You can do up to three");
    }
}

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

toDoForm.addEventListener("submit", handleToDoSbumit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}