// selectors 
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

// funnctions
function addTodo(event){
    // prevent from from submitting 
    event.preventDefault();
    // todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    // todo li
    const newTodo = document.createElement("li");
    newTodo.innerHTML=todoInput.value;
    newTodo.classList.add('todo-list');
    todoDiv.appendChild(newTodo);
    //  check add button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<h6>Completed</h6>';
    completedButton.classList.add("completed-btn");
    todoDiv.appendChild(completedButton);
// check closed button
    const closedButton = document.createElement('button');
    closedButton.innerHTML = '<h6>delete</h6>';
    closedButton.classList.add("closed-btn");
    todoDiv.appendChild(closedButton);

    // appending to list 
    todoList.appendChild(todoDiv);
    // clear enter value 
    todoInput.value = "";
}

// delete functions
function deleteCheck(e){
   const item = e.target;
    // deleted todo list
    if(item.classList[0]==="closed-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    // check mark 
    if(item.classList[0]=== "completed-btn"){
        const todo = item.parentElement;
       todo.classList.toggle("completed");
    }

}
