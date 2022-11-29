var priceInfoEL = document.querySelector('.price-info')



var gamePricesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
		'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
	}
};


var getGame = function() {
    var queryString = document.location.search;
    var priceInfo = queryString.split('=')[1];

    if (priceInfo) {
        priceInfoEL.textContent = priceInfo;
        getGamePrices(priceInfo);
    } else {
       // document.location.replace('./index.html');
    }
};


var getGamePrices = function(gameName) {
    var PricesURL = 'https://game-prices.p.rapidapi.com/games?title=' + gameName + '&region=us&limit=10';
    fetch(PricesURL, gamePricesAPI).then(function (response) {
        if (response.ok) {
            //console.log(response);
            response.json().then(function (data) {
                console.log(data);
                displayPrices(data.games);
            });
        } else {
           // document.location.replace('./index.html');
        }
    });
}


var displayPrices = function (gamePrices) {
    if (gamePrices.length === 0) {
        priceInfoEL.textContent = 'No prices for this game!';
        return;
    }
    for (var i = 0; i < gamePrices.length; i++) {
        var stores = gamePrices[i].stores;
        for(var j = 0; j < stores.length; j++){
           // console.log(stores[j]);
            var gameEl = document.createElement('span');
            gameEl.textContent = stores[j].seller + ": $" + stores[j].price;
            var priceEl = document.createElement('a');
            priceEl.innerHTML = gameEl.innerHTML;
            priceEl.classList = 'list-item flex-row justify-space-between align-center';
            priceEl.setAttribute('href', stores[j].url);
            priceEl.setAttribute('target', '_blank');
            priceInfoEL.appendChild(priceEl);
            priceInfoEL.innerHTML += "<br>";
        }
    }
};

getGame();