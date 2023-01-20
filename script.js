const imageContainer = document.getElementById('image-conteiner')
const loader = document.getElementById('loader')

let photosArray = [];

// Unsplash API
const count = 10;
const apiKey = 'SRS22Zv4ASoNE6m3iaFmN4D0kpSIIDKFGhUa26A4I1M';
const apiUrl= `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

// Get photos form Unsplash API
async function getPhotos() {
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		console.log(data);
	} catch (error) {
		//Catch Error Here
	}
}

// On Load
getPhotos();


