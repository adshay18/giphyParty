console.log("Let's get this party started!");
const $userInput = $('input');

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

const $searchForm = $('#search');
$searchForm.on('submit', function(e) {
	e.preventDefault();
	let $searchText = $userInput.val();
	$userInput.val('');
	getGIF($searchText);
});

$('#remove').on('click', function(e) {
	e.preventDefault();
	$('#results').empty();
});
