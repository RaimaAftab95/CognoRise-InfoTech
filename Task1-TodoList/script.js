
const input = document.getElementById("inp");
const validator = document.querySelector(".validator");
const todoList = document.getElementById("todo-list");

// creating local storage
function saveAll()
{
   const allTodos = JSON.stringify(todoList .innerHTML);
  localStorage.setItem("myTodos", allTodos);
  // go to console tab applications local storage 
}

// retrivng all todos
// func to load all todos on browser
// we call this in body tag to store list on browser refresh
function loadAllTodos()
{
  // parse to convert data in proper html formate
const allTodos = JSON.parse(localStorage.getItem("myTodos"));
// to check what it has
//console.log("allTodos",allTodos);
todoList.innerHTML = allTodos;
}
function addTodo() {
    if (input.value !== "") 
     {
        const taskText = "*\t"+ input.value;
        const taskItem = document.createElement("div");
        taskItem.innerHTML = `<div class="w-100 my-2 d-flex">
        
        <input type="text" class="form-control w-100" value="${taskText}" readonly>
        
        <button class="btn edit-btn p-2 mx-1 btn-sm edit-todo float-end" onclick="editTodo(this)" >
        <i class="fas fa-edit"></i></button>
         <button class="btn trash-btn  p-2 delete-todo float-end"  onclick="removeTodo(this)">
        <i class="fas fa-trash"></i></button> </div>`;
        // Append the task item to the todo list
        todoList.appendChild(taskItem);
       // Clear the input field and hide the error message
        input.value = "";
        validator.textContent = "";
    }

    else
    {
        validator.textContent = "Please enter todo task";
    }
    // local storage function call
    saveAll();
}

//   making remove function
function removeTodo(i)
{
console.log(i.parentNode.remove());
// local storage function call
saveAll();
}

//   making remove function for all todo list items
function removeAllTodos() 
{
    if(todoList.childElementCount== 0)

    {
      validator.textContent="List is Empty";
    }
  // otherwise make the list empty
    else{ 
      todoList.innerHTML = '';
       
    }
     // local storage function call
     saveAll();
}


// edit function
    function editTodo(item)
{
  //if(  item.textContent=="Done")
  // replacing done text with icon
  if (item.childNodes[1].textContent.includes("fa-check"))
  {
const todoName = item.previousElementSibling.value;
let span= document.createElement("span");
span.textContent=  todoName;
item.parentElement.replaceChild(span,item.previousElementSibling);
item.innerHTML=`<i class="fas fa-edit"></i>`;
item.classList.add("edit-btn","btn", "p-2", "btn-sm" ,"edit-todo", "float-end");
span.classList.add("editing","w-100","form-control","d-flex");

 }

    // edit mode
  else
  {
const todoName =item.previousElementSibling.textContent;
console.log(todoName);
//item.textContent="Done";
// adding fontawsome icon instead of text done
item.innerHTML = `<i class="fa-solid fa-check"></i>`;
let newinput= document.createElement("input");
  newinput.type="text";
  newinput.value= "*\t"+todoName;
  item.parentElement.replaceChild(newinput,item.previousElementSibling);
// Add the 'editing' class to the input
    newinput.classList.add("editing","w-100","form-control","d-flex");
    

  }
  // local storage function call
  saveAll();
}
