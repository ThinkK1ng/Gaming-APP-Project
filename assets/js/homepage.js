var twitchPopAPI = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
            'X-RapidAPI-Host': 'twitch-game-popularity.p.rapidapi.com'
        }
    };
    

var gameInputEL = document.querySelector('#searchbar');
var cardContentEl = document.querySelectorAll('.card-content');


//console.log(cardContentEl);
var gameHandler = function init() {
    if (cardContentEl) {
        getGamePop(document.querySelector('[data-id="Game1"]').textContent);
        getGamePop(document.querySelector('[data-id="Game2"]').textContent);
        getGamePop(document.querySelector('[data-id="Game3"]').textContent);
        getGamePop(document.querySelector('[data-id="Game4"]').textContent);
        getGamePop(document.querySelector('[data-id="Game5"]').textContent);
        getGamePop(document.querySelector('[data-id="Game6"]').textContent);
        getGamePop(document.querySelector('[data-id="Game7"]').textContent);
        getGamePop(document.querySelector('[data-id="Game8"]').textContent);
        getGamePop(document.querySelector('[data-id="Game9"]').textContent);
        getGamePop(document.querySelector('[data-id="Game10"]').textContent);

    }


}



var getGamePop = function (Game) {
    var twitchURL = ('https://twitch-game-popularity.p.rapidapi.com/game?name=' + Game + '&year=2021');
    fetch(twitchURL, twitchPopAPI)
	.then(function (response) {
        if (response.ok) {
            response.json().then(function (data) {
                console.log("hey we're in the response");
                //console.log(data);
                gameContent(data, Game);
            });
        } else {
            alert('Error ' + response.statusText);
        }

    });
}

var gameContent = function (data, Game) {
    for (var i = 0; i < data.length; i++) {
        //console.log(data[i].Hours_watched, data[i].Rank);
        var rankEl = document.createElement('span');
        rankEl.textContent = data[i].Rank;
        cardContentEl[0].append(rankEl);
    }
}


gameHandler();


