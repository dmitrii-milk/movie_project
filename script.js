//------------------------событие входа---------------------- 
let enter = document.querySelector('#login-button').onclick = function () {
	document.location.href = "login.html"
}
let register = document.querySelector('#reg-button').onclick = function () {
	document.location.href = "register.html"
}
const API_KEY = '7f1b6f50ab71568f7ee0decc0d54b44a';
const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

const url = 'https://api.themoviedb.org/3/search/movie?api_key=7f1b6f50ab71568f7ee0decc0d54b44a'


const searchButton = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const movieSearchable = document.querySelector('#movie-serchable');


function movieSection(movies) {
	return movies.map((movie) => {
		if (movie.poster_path) {
			return `<div class='wrapper'><img
				src=${IMAGE_URL + movie.poster_path}
				data-movie-id=${movie.id}/>
				<span>${movie.title}</span></div>`
		};
	});

}



function createMovieContainer(movies) {
	const movieElement = document.createElement('div');
	movieElement.setAttribute('class', 'movie');

	const movieTemplate = `
			<section class="section">
			${movieSection(movies)}
			</section>`;
	movieElement.innerHTML = movieTemplate;
	return movieElement;
}

	
function renderSearchMovie(data) {
	movieSearchable.innerHTML = '';
	const movies = data.results;
	const movieBlock = createMovieContainer(movies);
	movieSearchable.appendChild(movieBlock);
	console.log('Data:', data);
}

searchButton.onclick = function (event) {
	event.preventDefault();
	const inputValue = inputElement.value;
	let newUrl = url + '&query=' + inputValue + '&language=ru';

	fetch(newUrl)
		.then((res) => res.json())
		.then(renderSearchMovie)
		.catch((error) => {
		console.log('Error:', error)
	})
	inputElement.value = '';

}


document.onclick = function (event) {
	const target = event.target;
	if (target.tagName.toLowerCase() === 'img') {
	}
	
}

