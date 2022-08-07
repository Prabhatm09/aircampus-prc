const form = document.querySelector('#new-form');
const input = document.querySelector('#new-input')
const button = document.querySelector('#submit-btn')
let tasks = document.querySelector('.tasks')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let task = input.value;

    let task_elem = document.createElement('div');
    task_elem.classList.add('task');
    
    let task_constent_elem = document.createElement('div');
    task_constent_elem.classList.add('content');
    task_constent_elem.append(task_input_element)

    task_elem.append(task_constent_elem);
    
    let task_input_element = document.createElement('input');
    task_input_element.classList.add('text');
    task_input_element.type = 'text';
    task_input_element.value = task;
    task_input_element.setAttribute('readonly' , 'readonly');

    let task_actions = document.createElement('div');
    task_actions.classList.add('actions');

    let edit = document.createElement('button');
    edit.classList.add('edit');
    edit.innerText = 'Edit';

    let delete_button = document.createElement('button');
    delete_button.classList.add('delete');
    delete_button.innerText = 'Delete';

    task_actions.append(edit);
    task_actions.append(delete_button);

    task_elem.append(task_actions);

    tasks.append(task_elem)
 input.value = '';

 edit.addEventListener('click', (e)=>{
    if(edit.innerText == 'Edit'){
        edit.innerText = 'Save';
        task_input_element.removeAttribute('readonly');
    }else{

        edit.innerText = 'Edit';
    }
 })

 console.log(task)
} )