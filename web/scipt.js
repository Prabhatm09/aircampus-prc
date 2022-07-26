let button = document.querySelector(".mybutton");
let div = document.querySelector("#list");
let button1 = document.querySelector(".mybutton1")
let button2 = document.querySelector(".mybutton2")
let div1 = document.querySelector("#btn");
button.addEventListener("click", Myfunction);
button1.addEventListener("click", myFnt);
button2.addEventListener("click", myFnt2);
    // button.addEventListener("click", Myfunction2);
    function Myfunction(){
        if(div.style.display == "none"){
            div.style.display = "Block"
        }else {
            div.style.display = "none"
        }
    }

    function myFnt(){
        div1.style.display ="block"
    }
    function myFnt2(){
        div1.style.display ="none"
    }