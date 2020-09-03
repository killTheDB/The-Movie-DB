$(document).ready(() => {
  //alert(45);
  getpopmovies();
});
function getpopmovies() {
  axios
    .get(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=00ca5664e4cf163caa48847fd56dadf8"
    )
    .then((response) => {
      console.log(response);
      let movies = response.data.results;
      let output = "";
      $.each(movies, (index, movie) => {
        output += `
                <div class="col-md-3">
                 <div class="well text-center">
                   <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}">
                   <h5>${movie.title}</h5>
                   <a onclick="movieSelected('${movie.title}')" class="btn btn-primary" href="#">Series Details</a>
                 </div>
                </div>
                `;
      });
      $("#movies").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}

function movieSelected(name) {
  sessionStorage.setItem("movieName", name);
  window.location = "movieresult.html";
  return false;
}

function getMovie() {
  let movieName = sessionStorage.getItem("movieName");

  axios
    .get("http://www.omdbapi.com/?t=" + movieName + "&apikey=8ac43b9")
    .then((response) => {
      console.log(response);
      let movie = response.data;

      let output = `
        <div class="row">
          <div class="col-md-4">
            <img src="${movie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${movie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Released:</strong> ${movie.Year}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${movie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${movie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${movie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${movie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${movie.Plot}
           
          </div>
        </div>
      `;

      $("#movie").html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
