let List =JSON.parse(localStorage.getItem('List')) || [];

function readHTML(){
    let ht = '';
    List.forEach((todoObjact,index) =>{
        const {newt,nd} = todoObjact;
        const html =`
         <div>${newt}</div>
         <div>${nd}</div>
         <button  
            class="delete-todo-button js-d" 
            data-index="${index}">
            Delete
        </button>
        `;
        ht += html;
    })
    document.querySelector('.todo_list').innerHTML = ht;

    document.querySelectorAll('.js-d').forEach((button) => {
        button.addEventListener('click',()=>{
            const index = button.dataset.index;
            deleteTodo(index);
});
    });
    
}


function deleteTodo(i){
    List.splice(i, 1);
    localStorage.setItem('List', JSON.stringify(List));
    readHTML();
}

readHTML();

function add(){
    
    let te = document.querySelector('.tex');
    let d = document.querySelector('.todo-date');
    const nd = d.value;

    const newt = te.value;
    List.push({ newt , nd});

    localStorage.setItem('List',JSON.stringify(List));

    te.value = '';

    readHTML();

}

document.querySelector('.ad').addEventListener('click',()=>{
    add();
})

function en(event){
    if(event.key === 'Enter'){
        add();
    }
}