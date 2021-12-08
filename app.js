console.log("Let's get this party started!");

async function getGIF(term) {
	const res = await axios.get(
		`http://api.giphy.com/v1/gifs/search?q=${term}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`
	);
	const randomGIF = res.data.data[Math.floor(Math.random() * 50)].images.original.url;
	addGIF(randomGIF);
}

function addGIF(imgURL) {
	let $newGIF = $('<img>', { src: imgURL });
	$('#results').append($newGIF);
}

const $searchButton = $('#submit');
$searchButton.on('click', function(e) {
	e.preventDefault();
	let $searchText = $('input').val();
	getGIF($searchText);
});
