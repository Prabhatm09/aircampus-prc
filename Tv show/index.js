const input = document.querySelector(".input");
const button = document.querySelector(".btn");




button.addEventListener("click", getdata);

function getdata(e) {
    const apiUrl = `https://api.tvmaze.com/search/shows?q=${input.value}`
    fetch(apiUrl)
        .then(res => res.json())
        .then((data) => {

            getinfo(data)

            console.log(data);
        })
}

function getinfo(info) {

    info.forEach(element => {
        let list = `<div class="details">
      <img src="${element.show.image.original}" alt="img" class="img">
      <h1 class="h1">NAME : ${element.show.name}</h1>
      <h2 class="h2">STARTS :${element.show.premiered}</h2>
      <h2 class="h2">LANGUAGE : ${element.show.language}</h2>
      <button class="showbtn">
      <a href="${element.show.url}" target="_blank" id="links">Show Details</a></button>
      </div>`
      
      
      let container = document.querySelector(".container")
      container.innerHTML += list
    }) 
}

 const showdetail = document.querySelector(".showbtn")
    showdetail.addEventListener("click", () => {
         fetch(`https://api.tvmaze.com/shows/1?embed[]=seasons&embed[]=cast`)
         .then(res => res.json())
         .then((details =>{
               getNewpageDetails(details);
               console.log(details);
         }))
    });


    function getNewpageDetails(data){
        data.forEach(element => {
            let list = `<div class="data">
          <img src="${element.show.image.original}" alt="img" class="img">
          <h1 class="h1">NAME : ${element.name}</h1>
          <h2 class="h2">STARTS :${element.show.premiered}</h2>
          <h2 class="h2">LANGUAGE : ${element.show.language}</h2>
          <h2 class="h2"> ${element.show.language}</h2>
         
          </div>`

          let container = document.querySelector(".container")
      container.innerHTML = list
        })
    }





