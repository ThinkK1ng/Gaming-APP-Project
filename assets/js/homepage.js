var twitchPopAPI = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
            'X-RapidAPI-Host': 'twitch-game-popularity.p.rapidapi.com'
        }
    };
    

var gameInputEL = document.querySelector('.searchbar');
var cardContentEl = document.querySelectorAll('.card-content');

//console.log(cardContentEl);
var gameHandler = function init() {
    if (cardContentEl) {
        getGamePop(document.querySelector('[data-id="Game1"]').textContent, 0);
         getGamePop(document.querySelector('[data-id="Game2"]').textContent, 1);
         getGamePop(document.querySelector('[data-id="Game3"]').textContent, 2);
         getGamePop(document.querySelector('[data-id="Game4"]').textContent, 3);
         getGamePop(document.querySelector('[data-id="Game5"]').textContent, 4);
         getGamePop(document.querySelector('[data-id="Game6"]').textContent, 5);
         getGamePop(document.querySelector('[data-id="Game7"]').textContent, 6);
         getGamePop(document.querySelector('[data-id="Game8"]').textContent, 7);
         getGamePop(document.querySelector('[data-id="Game9"]').textContent, 8);
         getGamePop(document.querySelector('[data-id="Game10"]').textContent, 9);
    }


};



var getGamePop = function (Game, cardIndex) {
    var twitchURL = ('https://twitch-game-popularity.p.rapidapi.com/game?name=' + Game + '&year=2021&month=01');
    fetch(twitchURL, twitchPopAPI)
	.then(function (response) {
        return response.json();
    
}).then(function (data) {
    cardContentEl[cardIndex].innerHTML = data[0].Game + '<br>' + data[0].Rank;
    //testName.textContent = data[0].Rank
}) }


    // var rankEl= document.createElement('a');
    // rankEl.setAttribute('href', './prices.html?game=' + cardContent);


gameHandler();


