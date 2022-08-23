const dino = document.querySelector('#dino');
const cactus = document.querySelector('#cactus');

function jump(){
    if(dispatchEvent.classlist != "jump"){
        dino.classList.add("jump");
            setTimeout(function(){
                dino.classList.remove("jump")
            }  , 300)
        }
    }

    let checkAlive = setInterval(function(){
        let dinoTop = 
        parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
        let cactusLeft = 
        parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));
        
        if(cactusLeft > 0 && cactusLeft < 70 && dinoTop >= 130){
            dino.style.animationPlayState = 'paused';
            cactus.style.animationPlayState = 'paused';
            alert("whoops ! game over ");
            window.location.reload();
        }
    } , 10);
    document.addEventListener("keydown" , function(event){
        jump();
    })

