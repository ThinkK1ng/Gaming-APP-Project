const gamePricesAPI = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
		'X-RapidAPI-Host': 'game-prices.p.rapidapi.com'
	}
};

fetch('https://game-prices.p.rapidapi.com/games?title=&region=us&limit=10', gamePricesAPI)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));


    const twitchPopAPI = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '4791ab9712msh7147de2993ea896p10b583jsn6d99266260b6',
            'X-RapidAPI-Host': 'twitch-game-popularity.p.rapidapi.com'
        }
    };
    
    fetch('https://twitch-game-popularity.p.rapidapi.com/games', twitchPopAPI)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));