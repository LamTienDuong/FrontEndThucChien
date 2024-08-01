let input = document.querySelector('input');
let button = document.querySelector('button');
let form = document.querySelector('form');
let todos = document.querySelector('.todos');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let val = input.value.trim();
    if (val) {
        addTodoElement({
            text: val,
        });
        saveTodosList();
    }
    input.value = '';
})

function addTodoElement(todo) {
    let li = document.createElement('li');
    li.innerHTML = `
                    <span>${todo.text}</span>
                    <i class="fa-regular fa-trash-can"></i>                
                    `;
    if (todo.status === 'completed') {
        li.setAttribute('class', 'completed');
    }

    li.addEventListener('click', function() {
        this.classList.toggle('completed');
        saveTodosList();
    });

    li.querySelector('i').addEventListener('click', function() {
        this.parentElement.remove();
        saveTodosList();
    })

    todos.appendChild(li);
    saveTodosList();

}

function saveTodosList() {
    let todoList = document.querySelectorAll('li');
    let todoStorage = [];
    todoList.forEach(function(item) {
        let text = item.querySelector('span').innerText;
        let status = item.getAttribute('class');

        todoStorage.push({
            text,
            status
        });
    });

    localStorage.setItem('todoList', JSON.stringify(todoStorage));
    // console.log(JSON.parse(localStorage.getItem('todoList')));
}

function init() {
    let data = JSON.parse(localStorage.getItem('todoList'));
    data.forEach(function(item) {
        console.log(item);
        addTodoElement(item);
    })
}

init();

