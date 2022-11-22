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
    var gameName = queryString.split('=')[1];

    if (gameName) {
        gameNameEL.textContent = gameName;
        getGamePrices(gameName);
    } else {
        document.location.replace('./index.html');
    }
};


var getGamePrices = function(gameName) {
    var PricesURL = 'https://game-prices.p.rapidapi.com/games?title=' + gameName + '&region=us&limit=10';
    fetch(PricesURL).then(function (response) {
        if (response.ok) {
            response.json()
        } else {
            document.location.replace('./index.html');
        }
    });
}