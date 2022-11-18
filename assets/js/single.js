var gameNameEL = document.querySelector('#game-name')



var gamePricesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
		'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
	}
};


var getGame = function() {
    var queryString = document.location.search;
    var Game = queryString.split('=')[1];

    if (Game) {
        gameNameEL.textContent = Game;
        getGamePrices(Game);
    } else {
        document.location.replace('./index.html');
    }
};


var getGamePrices = function(game) {
    var PricesURL = 'https://game-prices.p.rapidapi.com/games?title=' + game + '&region=us&limit=10';
    fetch(PricesURL).then(function (response) {
        if (response.ok) {
            response.json()
        } else {
            document.location.replace('./index.html');
        }
    });
}