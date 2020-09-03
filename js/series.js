$(document).ready(() => {
  //alert(45);
  getpopseries();
});
function getpopseries(){
	axios.get('https://api.themoviedb.org/3/tv/popular?api_key=00ca5664e4cf163caa48847fd56dadf8&language=en-US&page=1')
		.then((response) => {
			console.log(response);
			let series=response.data.results;
			let output='';
			$.each(series, (index,serie) =>{
				output +=`
                <div class="col-md-3">
                 <div class="well text-center">
                   <img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${serie.poster_path}">
                   <h5>${serie.name}</h5>
                   <a onclick="serieSelected('${serie.name}')" class="btn btn-primary" href="#">Series Details</a>
                 </div>
                </div>
                `;   
			});
			$('#series').html(output);
		})
		.catch((err) =>{
			console.log(err);
		});
}

function serieSelected(name){
  sessionStorage.setItem('serieName', name);
  window.location = 'seriesresult.html';
  return false;
}


function getSerie(){
  let serieName = sessionStorage.getItem('serieName');

  axios.get('http://www.omdbapi.com/?t='+serieName+'&apikey=8ac43b9')
    .then((response) => {
      console.log(response);
      let serie = response.data;

      let output =`
        <div class="row">
          <div class="col-md-4">
            <img src="${serie.Poster}" class="thumbnail">
          </div>
          <div class="col-md-8">
            <h2>${serie.Title}</h2>
            <ul class="list-group">
              <li class="list-group-item"><strong>Released:</strong> ${serie.Year}</li>
              <li class="list-group-item"><strong>IMDB Rating:</strong> ${serie.imdbRating}</li>
              <li class="list-group-item"><strong>Director:</strong> ${serie.Director}</li>
              <li class="list-group-item"><strong>Writer:</strong> ${serie.Writer}</li>
              <li class="list-group-item"><strong>Actors:</strong> ${serie.Actors}</li>
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="well">
            <h3>Plot</h3>
            ${serie.Plot}
           
          </div>
        </div>
      `;

      $('#serie').html(output);
    })
    .catch((err) => {
      console.log(err);
    });
}
