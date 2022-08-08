const form = document.querySelector('#new-form');
const input = document.querySelector('#new-input')
const button = document.querySelector('#submit-btn')
let tasks = document.querySelector('.tasks')

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let task = input.value;
if(task.length > 1){
    let task_element = document.createElement('div');
    task_element.classList.add('task');
    
    let task_content_element = document.createElement('div');
    task_content_element.classList.add('content');
    task_element.append(task_content_element)

    task_element.append(task_content_element);
    
    let task_input_element = document.createElement('input');
    task_input_element.classList.add('text');
    task_input_element.type = 'text';
    task_input_element.value = task;
    task_input_element.setAttribute('readonly' , 'readonly');

    task_content_element.append(task_input_element);

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

    task_element.append(task_actions);

    tasks.append(task_element)

     input.value = '';

 edit.addEventListener('click', (e)=>{
    if(edit.innerText == 'Edit'){
        edit.innerText = 'Save';
        task_input_element.removeAttribute("readonly" );
    }else{

        edit.innerText = 'Edit';
        task_input_element.setAttribute("readonly" , "readonly")
    }
 });

 delete_button.addEventListener("click" , (e)=> {
    tasks.removeChild(task_element)
 })
}
});