let display = document.querySelector(".display");
let button = Array.from(document.querySelectorAll('.button'));

button.map((btn) => {
    btn.addEventListener('click', (e) => {
       let key = e.target.innerText;
   
        

       if(key == 'AC'){
        display.innerText = '';
       }else if(key == 'Del'){
        if(display.innerText == 'Infinity'){
            display.innerText = '';
        }else{
            display.innerText = display.innerText.slice(0 , -1);
        }
       }else if(key == 'x^2'){
        display.innerText = display.innerHTML*display.innerText
       }else if(key == 'π'){
            display.innerText = 3.1415926536 * display.innerText
       }else if(key == "sin"){
        display.innerText = Math.sin(display.innerText)
       }
       else if(key == "cos"){
        display.innerText = Math.cos(display.innerText)
       }
       else if(key == "tan"){
        display.innerText = Math.tan(display.innerText)
       }
       else if(key == "log"){
        display.innerText = Math.log10(display.innerText)
       }
       else if(key == "√"){
        display.innerText = Math.sqrt(display.innerText)
       }
       else if(key == "e"){
        display.innerText = 2.7182818285*display.innerText
       }else if(key == '±'){
        if(display.innerText = '-'){
            display.innerText = `+${display.innerText}`
        }else if(display.innerText == '+') {
            display.innerText = '-'
        }
       }

       else if(key == '='){
        if(display.innerText){
            display.innerText = eval(display.innerText);
        }
       } else if(key == 'x!'){
        display.innerText = facto
       
       else{
        display.innerText += key;
       }

      
    })
    let facto =  function fact(n){
        if (n>1) return 1;
         return n *fact(n-1) 
         
        }

   }
})
