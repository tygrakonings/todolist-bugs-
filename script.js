//VRAGEN

// 1. Hoe mappen over lege lijst? 
// 2. delete function wrong output json?
// 3. verschil tussen addTaskToDom & addItemsToDOM?

//Select elements

const todoInput = document.getElementById("todoInput");
const todoButton = document.getElementById("todoButton");
const todoList = document.getElementById("todo-list");


// FUNCTIONS

const createTaskList = async function () {
    console.log("hello world")
    const data = await getTasks();
    // console.log(data.id);
    
    addItemsToDom(data);
    
}
createTaskList();



// add Task to dom
const addTaskToDom = async function (data) {

    postTask(todoInput.value);
createTaskList();
}

// add items to dom 

const addItemsToDom = async function (data){
    console.log(data);
    todoList.innerHTML = ""; //mis the innerHTLM

    data.map(function(x) {
        
        const todoDiv = document.createElement("div");
        todoDiv.classList.add("todo");
        const newTodo = document.createElement("li");
        console.log(x.description);
        newTodo.innerText = x.description;
        console.log(x._id);
        newTodo.id = x._id;
        newTodo.classList.add("todo-item");
        todoDiv.appendChild(newTodo);
        todoInput.value ="";
      
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = "delete";
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    
    deleteButton.addEventListener('click', () => {
        deleteTask(x._id) 
    } )
    
    todoList.appendChild(todoDiv);
    })
    }

    const deleteItem = async function(event){
        const item = event.target;
        if(item.classList[0] === "delete-btn"){
    const todo = item.parentElement;
    todo.remove();
    
        }
     }
    
    
     //Event listeners
    todoButton.addEventListener("click", addTaskToDom);
    todoList.addEventListener("click", deleteItem);
    


// const addItemsToDom = async function (data){
// console.log(data);

// data.map(function(x) {
//     const todoDiv = document.createElement("div");
//     todoDiv.classList.add("todo");
//     const newTodo = document.createElement("li");
//     console.log(x.description);
//     newTodo.innerText = x.description;
//     console.log(x._id);
// newTodo.id = x._id;
//     newTodo.classList.add("todo-item");
//     todoDiv.appendChild(newTodo);
//     todoInput.value ="";
  
// const deleteButton = document.createElement("button");
// deleteButton.innerHTML = "delete"
// deleteButton.classList.add("delete-btn");
// todoDiv.appendChild(deleteButton);
// // deleteButton.addEventListener('click', deleteTask() )

// todoList.appendChild(todoDiv);
// })
// }

 //delete item from dom 

 // function deleteTodoItem(event){
//     const item = event.target;
//     if(item.classList[0] === "trash-btn"){
// const todo = item.parentElement;
// todo.remove();
//     }f
//     if(item.classList[0] === "complete-btn"){
//         const todo = item.parentElement;
//         todo.classList.toggle("completed");

//     }
// }

// }

// function addTodo(event){

//    const todoDiv = document.createElement("div");
//    todoDiv.classList.add("todo");
//    const newTodo = document.createElement("li");
//    newTodo.innerText = todoInput.value;
//    newTodo.classList.add("todo-item");
//    todoDiv.appendChild(newTodo);

// const trashButton = document.createElement("button");
// trashButton.innerHTML = "delete"
// trashButton.classList.add("trash-btn");
// todoDiv.appendChild(trashButton);

// todoList.appendChild(todoDiv);
// todoInput.value ="";
// }

// function deleteTodoItem(event){
//     const item = event.target;
//     if(item.classList[0] === "trash-btn"){
// const todo = item.parentElement;
// todo.remove();
//     }f
//     if(item.classList[0] === "complete-btn"){
//         const todo = item.parentElement;
//         todo.classList.toggle("completed");

//     }
// }

// //EventListener

// todoButton.addEventListener("click", addTodo);
// todoList.addEventListener("click", deleteTodoItem);


//post
// const createPost = async function () {
//     console.log("hello world")
//     const data = await postTask();
//     console.log(data.id);
    
//     addTaskToDom(data);
    
// }


//delete
// const deletePost = async function () {
//     const data = await deleteTask();
//     console.log(data.id);
    
//     addTaskToDom(data);
    
// }

