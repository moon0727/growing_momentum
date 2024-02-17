const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const quoteAndAuthor = document.querySelector("#quote");
const weather = document.querySelector("#weather");
const loginText = document.querySelector("#login-text");
const toDoText = document.querySelector("#todo-text");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const FIRST_VIEW = "first-view"

//username submit event : preventDefault, loginform hidden, save username, show hello username
function onLoginSubmit(event) {
    event.preventDefault();

    const username = loginInput.value;

    loginForm.classList.add(HIDDEN_CLASSNAME);
    loginText.classList.add(HIDDEN_CLASSNAME);
    loginInput.classList.add(HIDDEN_CLASSNAME);
    document.body.classList.remove(FIRST_VIEW);

    localStorage.setItem(USERNAME_KEY, username);

    loginInput.value = "";

    paintGreetings(username);
}

//hello username : show hello username, remove hidden
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    clock.classList.remove(HIDDEN_CLASSNAME);
    toDoForm.classList.remove(HIDDEN_CLASSNAME);
    toDoInput.classList.remove(HIDDEN_CLASSNAME);
    toDoText.classList.remove(HIDDEN_CLASSNAME);
    toDoList.classList.remove(HIDDEN_CLASSNAME);
    quoteAndAuthor.classList.remove(HIDDEN_CLASSNAME);
    weather.classList.remove(HIDDEN_CLASSNAME);
    document.body.classList.remove(FIRST_VIEW);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

//check exist username in localStorage
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginText.classList.remove(HIDDEN_CLASSNAME);
    loginInput.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else {
    paintGreetings(savedUsername);
}