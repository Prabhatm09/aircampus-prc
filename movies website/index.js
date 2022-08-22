// ------------SELECTOR--------------


let Addbutton = document.querySelector(".add");
let container = document.querySelector(".container-section");
let doneButton = document.querySelector(".done-btn");
let displaySection = document.querySelector(".diplay-section");
let movieName = document.querySelector(".name");
let imgLink = document.querySelector(".Image");
let rating = document.querySelector(".rating");
let category = document.querySelector(".Category");
let playButton = document.querySelector(".trailer");
let actorName = document.querySelector(".Actor");
let directorName = document.querySelector(".Director");
let playBtn = document.querySelector(".play-btn");
let sortByRating = document.querySelector(".sort ");
let choose = document.querySelector(".Action");
let Comedy = document.querySelector(".comedy");
let thrill = document.querySelector(".thrill")

//--------event listener-----//

let data = [];

function addtask(){
    container.classList.add("show-container-section")
    container.style.display = 'block'
}


doneButton.addEventListener("click" , getTask);

function getTask(){
    let display = document.createElement("div");
    display.setAttribute("class" , "display")
display.innerHTML = ` <img src="${imgLink.value}" alt="img">
<div class="detail flex">
 <h4>${movieName.value}</h4>
 <h5><span>${rating.value}</span></h5>
</div>
<h4 class="h4">${directorName.value}</h4>
<button class="play-btn"><a href="${playButton.value}" target="_blank">Play</a></button>`
container.style.display = 'none'
displaySection.append(display)

let movieData = {
    nameMovie : movieName.value,
    linkImg : imgLink.value ,
    rating: rating.value ,
    category: category.value,
    trailor:playButton.value,
    actorName : actorName.value,
    directorName : directorName.value
}




data.push(movieData);


movieName.value = '';
imgLink.value = '';
rating.value = '';
category.value = '';
playButton.value = '';
actorName.value = '';
directorName.value = '';

}


// --------sort by rating -----//

sortByRating.addEventListener("click" , getSorted);

function getSorted(){

    
    data.sort((a , b)=>{
    var keyA = (a.rating), 
    keyB = (b.rating);

    return ((keyA < keyB) ? -1 : ((keyA > keyB) ? 1 : 0))
    })
     

    let newData = data; 
    data = [];
    displaySection.innerHTML = null
    for(let i=0; i<newData.length ; i++){

        let displaytwo = document.createElement("div");
        displaytwo.setAttribute("class" , "diplaytwo")
     displaytwo.innerHTML += ` <img src="${newData[i].imgLink}" alt="img">
    <div class="detail flex">
     <h4>${newData[i].nameMovie}</h4>
     <h5><span>${newData[i].rating}</span></h5>
    </div>
    <h4 class="h4">${newData[i].directorName}</h4>
    <button class="play-btn"><a href="${newData[i].playButton}" target="_blank">Play</a></button>`
    
    displaySection.append(displaytwo)
    
    }
    console.log(newData ,  newData[0].rating)   
}


// ------filter by category ---------//

choose.addEventListener('click' , filtermovie)
Comedy.addEventListener('click' , comedyfilter)
thrill.addEventListener('click' , thrillfilter);


function filtermovie(){
    let sortData = data;
    data = []
    displaySection.innerHTML = null
    for(let i=0; i<sortData.length ; i++){

        if(sortData[i].category == "Action"){

            console.log(sortData[i].category)

            let sortmovie = document.createElement("div");
            sortmovie.setAttribute("class" , "diplaytwo")
         sortmovie.innerHTML += ` <img src="${sortData[i].imgLink}" alt="img">
        <div class="detail flex">
         <h4>${sortData[i].nameMovie}</h4>
         <h5><span>${sortData[i].rating}</span></h5>
        </div>
        <h4 class="h4">${sortData[i].directorName}</h4>
        <button class="play-btn"><a href="${sortData[i].playButton}" target="_blank">Play</a></button>`
        
        displaySection.append(sortmovie)
       
        }
    
  
}
}

function  comedyfilter(){
    let sortData = data;
    data = []
    displaySection.innerHTML = null
    for(let i=0; i<sortData.length ; i++){

        if(sortData[i].category == "Comedy"){

            console.log(sortData[i].category)

            let sortmovie = document.createElement("div");
            sortmovie.setAttribute("class" , "diplaytwo")
         sortmovie.innerHTML += ` <img src="${sortData[i].imgLink}" alt="img">
        <div class="detail flex">
         <h4>${sortData[i].nameMovie}</h4>
         <h5><span>${sortData[i].rating}</span></h5>
        </div>
        <h4 class="h4">${sortData[i].directorName}</h4>
        <button class="play-btn"><a href="${sortData[i].playButton}" target="_blank">Play</a></button>`
        
        displaySection.append(sortmovie)
       
        }
    
   
}
}

function  thrillfilter(){
    let sortData = data;
    data = []
    displaySection.innerHTML = null
    for(let i=0; i<sortData.length ; i++){

        if(sortData[i].category == "Comedy"){

            console.log(sortData[i].category)

            let sortmovie = document.createElement("div");
            sortmovie.setAttribute("class" , "diplaytwo")
         sortmovie.innerHTML += ` <img src="${sortData[i].imgLink}" alt="img">
        <div class="detail flex">
         <h4>${sortData[i].nameMovie}</h4>
         <h5><span>${sortData[i].rating}</span></h5>
        </div>
        <h4 class="h4">${sortData[i].directorName}</h4>
        <button class="play-btn"><a href="${sortData[i].playButton}" target="_blank">Play</a></button>`
        
        displaySection.append(sortmovie)
       
        }
    
   
}
}
