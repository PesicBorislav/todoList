//selectors
const inputField=document.getElementById('toDoInput');
const addBtn=document.querySelector('.btn');
const toDoUl=document.querySelector('.toDoUl');
const isDoneBtn=document.querySelector('.add-btn');
const clearBtn=document.querySelector('.trash-btn');



//event listeners
addBtn.addEventListener('click',add);
toDoUl.addEventListener('click',finished);


//functions

function add(event){
    event.preventDefault()
    
        //Create new TODO DIV
    let newTodo=document.createElement('div');
    newTodo.classList.add('todo');

    //Create new LI
    let newLi=document.createElement('li');
    newLi.classList.add('todo-li');
    newLi.innerText=inputField.value;
    newTodo.appendChild(newLi)
    //Create new ADD BTN
    let newAddBtn=document.createElement('button');
    newAddBtn.classList.add('add-btn')
    newAddBtn.innerHTML='<i class="fa-solid fa-check" style="color: #088000"></i>'
    newTodo.appendChild(newAddBtn)
    //Create new TRASH BTN
    let newTrashBtn=document.createElement('button');
    newTrashBtn.classList.add('trash-btn');
    newTrashBtn.innerHTML='<i class="fa-solid fa-trash-can"></i>'
    newTodo.appendChild(newTrashBtn)

    //ADD NEWTODO to UL
    toDoUl.appendChild(newTodo)

    //CLEAR INPUT
    inputField.value='';

    
}


function finished(event){
    const item=event.target;
    //DELETE TODO
    if(item.classList[0]==='trash-btn'){
        const todo=item.parentElement;
        todo.remove()
    }
    //CHECK MARK
    if(item.classList[0]==='add-btn'){
        const todo=item.parentElement;
        todo.classList.toggle('completed');
    }
}