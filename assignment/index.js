const createButton =  document.querySelector(".create");
let cancelbtn = document.querySelector(".fa-xmark")
const doneButton =  document.querySelector(".done-btn");
let container = document.querySelector(".container");
const input = document.querySelector(".text");
let innercontainer = document.querySelector(".innercontainer")

// const yellow = document.querySelector(".yellow");
// const blue = document.querySelector(".blue");
// const black = document.querySelector(".black");
let colorchanger = ["red"  , "blue" , "yellow" , "black"];

createButton.addEventListener('click', ()=>{
    container.style.display ="flex"
});

cancelbtn.addEventListener("click" , (e)=>{
   container.style.display ="none"
})
doneButton.addEventListener('click' , (event) => {
    event.preventDefault();

    let valueTask = input.value;
    
    

    let containerTwo = document.createElement("div");
    containerTwo.classList.add("container-two");

    let  top = document.createElement("div");
    top.classList.add("top")
    containerTwo.append(top);
  

    
    let bottom = document.createElement("div");
    bottom.classList.add("bottom");
    containerTwo.append(bottom)

    let input_field = document.createElement("input");
    input_field.type = 'text';
    input_field.value = valueTask;
    input_field.setAttribute('readonly' , 'readonly');
    input_field.classList.add('text-1');
    bottom.append(input_field);

 let option_element = document.createElement("div");
 option_element.classList.add("option");
 containerTwo.append(option_element)

 let left_option_element = document.createElement("div");
 left_option_element.classList.add('left-option')
 option_element.append(left_option_element)

 let icon_element_check = document.createElement('i');
 icon_element_check.classList.add('fa-solid', 'fa-check');
 icon_element_check.style.display = 'none'
 left_option_element.append(icon_element_check)


 let icon_element_delete = document.createElement('i');
 icon_element_delete.classList.add('fa-solid', 'fa-trash-can');
 icon_element_delete.style.display = 'none'
 left_option_element.append(icon_element_delete)

 let icon_element_edit = document.createElement('i');
 icon_element_edit.classList.add('fa-solid', 'fa-pen-to-square');
 icon_element_edit.style.display = 'none'
 left_option_element.append(icon_element_edit)

 let colorchanger = document.createElement("div");
 colorchanger.classList.add("color-btn");
 left_option_element.append(colorchanger);


 let right_option_element = document.createElement("div");
 right_option_element.classList.add('right-option')
 option_element.append(right_option_element)

 let icon_element_lock = document.createElement('i');
 icon_element_lock.classList.add('fa-solid', 'fa-lock');
 right_option_element.append(icon_element_lock)

//  let icon_element_unlock = document.createElement('button');
//  icon_element_unlock.classList.add('fa-solid', 'fa-unlock');
//  right_option_element.append(icon_element_unlock);

 innercontainer.append(containerTwo)
 
 
 input.value = ''
 
 container.style.display ="none"
 
 
 
 icon_element_lock.addEventListener('click', (e)=>{
    
    if( icon_element_lock == 'fa-solid', 'fa-lock'){
        icon_element_check.style.display = 'block'
        icon_element_delete.style.display = 'block'
        icon_element_edit.style.display = 'block'
    }
    // }else{
    //     icon_element_check.style.display = 'none'
    //     icon_element_delete.style.display = 'none'
    //     icon_element_edit.style.display = 'none'
    // }

 });
 icon_element_check.addEventListener('click' , (e)=>{
    input_field.setAttribute("readonly" , "readonly")
 })
  icon_element_edit.addEventListener('click' , (e)=>{
    input_field.removeAttribute("readonly")
  });
 icon_element_delete.addEventListener('click' , (e) => {
    innercontainer.removeChild(containerTwo)
 });

//  red.addEventListener('click' , ()=>{
     
//     top.style.backgroundColor = 'red'
//     containerTwo.append(top)
//  })

});
