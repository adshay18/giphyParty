console.log("Let's get this party started!");

async function getGIF(term) {
	const res = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	const randomGIF = res.data.data[Math.floor(Math.random() * 50)].url;
	addGIF(randomGIF);
	console.log(randomGIF);
}

function addGIF(imgURL) {
	let image = new Image();
	image.src = `https://giphy.com/gifs/hello-hi-greetings-MPxg9U887PS0B8XT4J`;
	$('#results').append(image);
}

const searchButton = $('#submit');
searchButton.on('click', function(e) {
	e.preventDefault();
	let searchText = $('input').val();
	getGIF(searchText);
	searchText = '';
});
