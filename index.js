
document.addEventListener("DOMContentLoaded", () => {
    fetchMovies();
  });
  const url="http://localhost:3000/films"
  const urlfirst="http://localhost:3000/films"

function displayMovies(movie){
    const movii=document.getElementById("movies")
    const container=document.createElement("div")
    container.className="container"
    container.innerHTML=`
    <div class="movieCard">
    <ul>
    <li class ="title"><span class="bold">Title:</span><a>${movie.title}</a></li>
    <li class ="title"><span class="bold">Runtime:</span><a>${movie.runtime}</a></li>
    <li class ="title"><span class="bold">Capacity:</span><a>${movie.capacity}</a></li>
    <li class ="title"><span class="bold">Showtime:</span><a>${movie.showtime}</a></li>
    <li class ="title"><span class="bold">Tickets Sold:</span><a>${movie.tickets_sold}</a></li>
    <li class ="title"><span class="bold">Description:</span><a>${movie.description}</a></li>
    <li class ="title"><span class="bold">Poster:</span><a>${movie.poster}</a></li>
    </ul>
    
    </div>
    `
    // console.log(movie.poster)
    container.querySelector(".movieCard").addEventListener("click", () => {
        displayMovieById(movie.id);

      });
      movii.appendChild(container);


}


function displayMovieById(id)
{
fetch(`${url}/${id}`)
.then((res) =>res.json())
.then((moveData) => {
    DisplayEachMovie(moveData);
})
}

function DisplayEachMovie(move){
    const title=document.querySelector(".title")
    const runtime=document.querySelector(".runtime")
    let availabletickets=document.querySelector(".availabletickets")
    const description=document.querySelector(".description")
    const poster=document.querySelector(".poster")

    title.innerHTML=`${title.textContent=move.title}`;
    availabletickets.textContent=`Available Tickets: ${move.capacity-move.tickets_sold}`
    runtime.innerHTML=`Runtime: ${runtime.textContent=move.runtime}`
    description.innerHTML=`<span class="description">Description:</span> ${description.textContent=move.description}`;

    poster.setAttribute("src", move.poster);

    
}

function fetchMovies(){
    fetch(url)
    .then(res=>res.json())
    .then(charData => {
        console.log(charData)
        charData.forEach((chard) => {
            displayMovies(chard);
        })
    })
}

