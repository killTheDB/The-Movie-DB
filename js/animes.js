$(document).ready(() => {
  //alert(45);
  getpopanimes();
});
function getpopanimes(){
	axios.get('https://api.themoviedb.org/3/tv/top_rated?api_key=00ca5664e4cf163caa48847fd56dadf8&language=en-US&page=1')
		.then((response) => {
			console.log(response);
			let animes=response.data.results;
			let output='';
			$.each(animes, (index,anime) =>{
				output +=`
                <div class="col-md-3">
                 <div class="well text-center">
                   <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${anime.poster_path}">
                   <h5>${anime.name}</h5>
                   <a onclick="animeSelected('${anime.name}')" class="btn btn-primary" href="#">Series Details</a>
                 </div>
                </div>
                `;   
			});
			$('#animes').html(output);
		})
		.catch((err) =>{
			console.log(err);
		});
}

function animeSelected(name){
  sessionStorage.setItem('animeName', name);
  window.location = 'animeresult.html';
  return false;
}


function getAnime(){
  let animeName = sessionStorage.getItem('animeName');

  axios.get('http://www.omdbapi.com/?t='+animeName+'&apikey=8ac43b9')
    .then((response) => {
      console.log(response);
      let anime = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${anime.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${anime.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Released:</strong> ${anime.Year}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${anime.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${anime.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${anime.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${anime.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${anime.Plot}
           
          </div>
        </div>
      `;

      $('#anime').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
