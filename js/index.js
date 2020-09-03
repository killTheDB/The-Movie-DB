//const container=document.querySelector(".container");
//const allbox=container.children;
/*
$(document).ready(() => {
  //alert(45);
  gettelmovies();
});
function gettelmovies(){
	axios.get('https://api.themoviedb.org/3/discover/movie?api_key=00ca5664e4cf163caa48847fd56dadf8&with_original_language=te&page=1')
		.then((response) => {
			console.log(response);
			let mvs=response.data.results;
			let output='';
			$.each(mvs, (index,mv) =>{
				output +=`
               
                 
                       <div class="item"><img src="https://image.tmdb.org/t/p/w185_and_h278_bestv2${mv.poster_path}">
                      
                       </div>
                
                `;   
			});
			$('#mvs').html(output);
		})
		.catch((err) =>{
			console.log(err);
		});
}
*/

$(document).ready(function () {
    //you can set this, as long as it's not greater than the slides length
    var show = 3;
    var w = $('#slider').width() / show;
    var l = $('.slide').length;
    
    $('.slide').width(w);
    $('#slide-container').width(w * l)
    
    function slider() {
        $('.slide:first-child').animate({
            marginLeft: -w
        }, 'slow', function () {
            $(this).appendTo($(this).parent()).css({marginLeft: 0});
        });
    }
    var timer = setInterval(slider, 1500);
    
    $('#slider').hover(function(){
        clearInterval(timer);
    },function(){
        timer = setInterval(slider, 1500);
    });
});

/*var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "block";
  }
  // slides[slideIndex-1].style.display = "block";
}*/
