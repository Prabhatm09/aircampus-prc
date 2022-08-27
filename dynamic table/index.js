let button = document.querySelector('#sucess');
let button1 = document.querySelector('table')

button.addEventListener('click' , ()=> {
  let name = document.querySelector('#name').value;
    let gmail = document.querySelector('#gmail').value;
    let number = document.querySelector('#number').value;
    
    if(!name || !gmail || !number){
        alert('please fill  all the boxes')
        return;
    }
    let display = document.querySelector('#display');
    display.innerHTML += `<tr>
    <th>${name}</th>
    <th>${gmail}</th>
    <th>${number}</th>
    <th><button class="danger">Remove</button></th>
    </tr>`
     
     name = '';
     gmail = '';
     number = " ";
    
    
  })

  button1.addEventListener('click', (e)=>{
    e.target.closest('tr').remove();
  })
  