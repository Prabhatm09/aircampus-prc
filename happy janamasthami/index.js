let button  = document.querySelector(".btn");
let model = document.querySelector(".content")
let cancel = document.querySelector(".cancel")

button.addEventListener("click", getwishes);

function getwishes(){
model.classList.add("show-content")
}

cancel.addEventListener("click" , (e)=>{
    model.classList.remove("show-content")
})