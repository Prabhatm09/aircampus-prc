const input = document.querySelector(".input");
const button = document.querySelector(".search");
// const container = document.querySelector(".container");




button.addEventListener("click", getdata);

function getdata() {
  const apiUrl = `https://api.tvmaze.com/search/shows?q=${input.value}`
  fetch(apiUrl)
    .then(res => res.json())
    .then((data) => {

      getinfo(data)

      // console.log(data);
    })
}

function getinfo(info) {

  for (let i = 0; i < info.length; i++) {
    let list = `<div class="details">
      <img src="${info[i].show.image.medium}" alt="img" class="img">
      <h1 class="h1">NAME : ${info[i].show.name}</h1>
      <h2 class="h2">STARTS :${info[i].show.premiered}</h2>
      <h2 class="h2">LANGUAGE : ${info[i].show.language}</h2>
      <button class="showbtn">
      <a href="./show.html"  id="${info[i].score}">Show Details</a></button>
      </div>`

      let container = document.querySelector(".container")
    container.innerHTML += list

    container.addEventListener("click", (e) => {
      if (e.target.id == info[i].score) {

        let showdata = info[i]
        // console.log(showdata);
        sessionStorage.setItem("key", JSON.stringify(showdata));
      }
    })
  }
}



