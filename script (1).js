const todo = document.getElementById("todo");
const todoInp = document.getElementById("todo-inp");
const todoItems = document.querySelector(".todo-items");

const addtodo = (e) => {
    e.preventDefault();
    if(todoInp.value.length > 0){
        let li = document.createElement("li");
        li.textContent = todoInp.value;
        todoItems.appendChild(li);
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        todoInp.value = ""
        sItem()


    }
}

todo.addEventListener("submit" , (e) => {
    addtodo(e);
} )


// for delete items

todoItems.addEventListener("click" , (e) => {
    if(e.target.tagName == "SPAN"){
       e.target.parentElement.remove()
       sItem()
    }
})

const sItem = () => {
    localStorage.setItem("saveTodo" ,todoItems.innerHTML);
}

const gItem = () => {
    todoItems.innerHTML = localStorage.getItem("saveTodo");
}

gItem()