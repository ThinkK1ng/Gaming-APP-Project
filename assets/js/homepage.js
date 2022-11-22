var twitchPopAPI = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
            'X-RapidAPI-Host': 'twitch-game-popularity.p.rapidapi.com'
        }
    };
    

var gameInputEL = document.querySelector('#searchbar');
var cardContentEl = document.querySelector('#card-content')



var getGamePop = function (Game) {
    var twitchURL = 'https://twitch-game-popularity.p.rapidapi.com/game?name=' + Game + '&year=2022';

    fetch(twitchURL, twitchPopAPI)
	.then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                displayGame(data, Game);
            });
        } else {
            alert('Error: ' + response.statusText);
        }
    });

};


