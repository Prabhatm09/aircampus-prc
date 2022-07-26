let button = document.querySelector(".mybutton");
let div = document.querySelector("#list");
button.addEventListener("click", Myfunction);
    // button.addEventListener("click", Myfunction2);
    function Myfunction(){
        if(div.style.display == "none"){
            div.style.display = "Block"
        }else {
            div.style.display = "none"
        }
    }