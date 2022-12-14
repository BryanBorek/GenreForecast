var rootEl = $('#root');
var searchInputEl = $('#weather-search');
var searchButtonEl = $('#search-button');
var resultsListEl = $('#results-list');
var resultsItemEl = $('#results-item');
var cardContainerEl = $('#cards')
cardContainerEl.hide();
var playlistContainerEl = $('#playlistContainer');
playListBtn = $('#showPlaylistBtn');
hidePlayListBtn =$('#hidePlaylistBtn');
hidePlayListBtn.hide();

var savedList = {
    playlistName: $(JSON.parse(localStorage.getItem('savedplaylistName'))),
    playlistLink: $(JSON.parse(localStorage.getItem('savedplaylistLink')))
}

// var for searches needs to be object
var thunderstorm = {
    name: ['Alternative', 'Radar', 'Rock', 'Punk', 'Metal'],
    id: ['alternative', 'radar', 'rock', 'punk', '0JQ5DAqbMKFDkd668ypn6O']
};
var drizzle  = {
    name: ['Frequency', 'Pride', 'Regional Mexican', 'Chill', 'Netflix'],
    id: ['0JQ5DAqbMKFF9bY76LXmfI', 'pride', '0JQ5DAqbMKFDTEtSaS4R92', 'chill', 'netflix-page']
};
var rain = {
    name: ['Wellness', 'Sleep', 'Mood', 'Christian & Gospel', 'Country'],
    id: ['wellness', '0JQ5DAqbMKFCuoRTxhYWow', 'mood', 'inspirational', 'country']
};
var snow = {
    name: ['Alternative', 'Hip-Hop', 'Rock', 'Workout', 'Soul'],
    id: ['alternative', 'hiphop', 'rock', '0JQ5DAqbMKFAXlCG6QvYQ4', '0JQ5DAqbMKFIpEuaCnimBj']
};
var clear = {
    name: ['Summer', 'Hip-Hop', 'Dance/Electronic', 'Punk', 'Frequency'],
    id: ['summer', 'hiphop', 'edm_dance', 'punk', '0JQ5DAqbMKFF9bY76LXmfI']
};
var clouds = {
    name: ['R & B', 'Hip-Hop', 'Indie', 'EQUALS', 'Gaming'],
    id: ['0JQ5DAqbMKFEZPnFQSFB1T', 'hiphop', 'indie_alt', '0JQ5DAqbMKFPw634sFwguI', '0JQ5DAqbMKFCfObibaOZbv']
};
var mist = {
    name: ['Pride', 'Jazz', 'Romance', 'Folk & Acoustic', 'K-Pop'],
    id: ['pride', 'jazz', '0JQ5DAqbMKFAUsdyVjCQuL', 'roots', '0JQ5DAqbMKFGvOw3O4nLAf']
};
var smoke = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var haze = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var dust = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var fog = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var sand = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var ash = {
    name: ['Instrumental', 'Sports', 'Ambient', 'In the car', 'Cooking & Dining'],
    id: ['0JQ5DAqbMKFRieVZLLoo9m', 'sports', '0JQ5DAqbMKFLjmiZRss79w', 'in_the_car', '0JQ5DAqbMKFRY5ok2pxXJ0']
};
var squall = {
    name: ['Kids & Family', 'Decades', 'Fresh Finds', 'Focus', 'Soul'],
    id: ['0JQ5DAqbMKFFoimhOqWzLB', '0JQ5DAqbMKFIVNxQgRNSg0', '0JQ5DAqbMKFImHYGo3eTSg', '0JQ5DAqbMKFCbimwdOYlsl', '0JQ5DAqbMKFIpEuaCnimBj']
};
var tornado = {
    name: ['Kids & Family', 'Decades', 'Fresh Finds', 'Focus', 'Soul'],
    id: ['0JQ5DAqbMKFFoimhOqWzLB', '0JQ5DAqbMKFIVNxQgRNSg0', '0JQ5DAqbMKFImHYGo3eTSg', '0JQ5DAqbMKFCbimwdOYlsl', '0JQ5DAqbMKFIpEuaCnimBj']
};

playListBtn.on('click' , function(event) {
    playlistContainerEl.children().remove();
    event.preventDefault();
    event.stopPropagation();
    for (var i = 0; i < savedList.playlistName.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(savedList.playlistName[i]);
        choiceEl.attr('type', 'button');
        choiceEl.attr('href', savedList.playlistLink[i]);
        choiceEl.attr('id', 'savedInList')
        choiceEl.addClass('m-2.5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"');
        playlistContainerEl.append(choiceEl);
    }
    playListBtn.hide();
    hidePlayListBtn.show();
});

hidePlayListBtn.on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    playlistContainerEl.children().remove();
    hidePlayListBtn.hide();
    playListBtn.show();
});

playlistContainerEl.on('click', '#savedInList' , function(event) {
    event.preventDefault();
    event.stopPropagation();
    window.open($(this).attr('href'));
});

function updateSavedPlaylist() {
    playlistContainerEl.children().remove();

    for (var i = 0; i < savedList.playlistName.length; i++) {
        var choiceEl = $('<button>');
        choiceEl.text(savedList.playlistName[i]);
        choiceEl.attr('type', 'button');
        choiceEl.attr('href', savedList.playlistLink[i]);
        choiceEl.attr('id', 'savedInList')
        choiceEl.addClass('m-2.5 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"');
        playlistContainerEl.append(choiceEl);
    }
}

var token = "";

var currentWeather;
//search function grab the user input and make weather api call
searchButtonEl.on('click', function(event) {
    event.preventDefault();
    event.stopPropagation();
    
    var APIKey = "e94d4ae885438d091e5594c1c03900ef";
    var city = $('input[id="weather-search"]').val();
    var weatherSearchURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey + "&units=imperial";
    var currentWeather;
    var genreId;
    var genreName;

    const _getPlaylistByGenre = async (token, genreId) => {
        // On the line below, change 'alternative' to the variable genre when done with testing
        const result = await fetch('https://api.spotify.com/v1/browse/categories/' + genreId + '/playlists?limit=5', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        $('#card1').text(data.playlists.items[0].name);
        $('#image1').attr('src', data.playlists.items[0].images[0].url);
        $('#desc1').text(data.playlists.items[0].description);
        
        $('#card2').text(data.playlists.items[1].name);
        $('#image2').attr('src', data.playlists.items[1].images[0].url);
        $('#desc2').text(data.playlists.items[1].description);
        
        $('#card3').text(data.playlists.items[2].name);
        $('#image3').attr('src', data.playlists.items[2].images[0].url);
        $('#desc3').text(data.playlists.items[2].description);

        cardContainerEl.show();
        $('#goto-playlist1').on('click', function() {
            window.open(data.playlists.items[0].external_urls.spotify, "_blank");
        });
        $('#goto-playlist2').on('click', function() {
            window.open(data.playlists.items[1].external_urls.spotify, "_blank");
        });
        $('#goto-playlist3').on('click', function() {
            window.open(data.playlists.items[2].external_urls.spotify, "_blank");
        });

        $('#save-playlist1').on('click', function() {
            event.preventDefault();
            event.stopPropagation();
            for (var i = 0; i < savedList.playlistLink.length; i++) {
                for (var j = 0; j < savedList.playlistLink.length; j++) {
                    if (data.playlists.items[0].external_urls.spotify === savedList.playlistLink[i]) {
                        savedList.playlistLink.splice(i , 1);
                        savedList.playlistName.splice(i , 1);
                    }
                }
            }
            savedList.playlistName.push(data.playlists.items[0].name);
            savedList.playlistLink.push(data.playlists.items[0].external_urls.spotify);
            localStorage.setItem('savedplaylistName', JSON.stringify(savedList.playlistName));
            localStorage.setItem('savedplaylistLink', JSON.stringify(savedList.playlistLink));
            updateSavedPlaylist()
        });
        $('#save-playlist2').on('click', function() {
            event.preventDefault();
            event.stopPropagation();
            for (var i = 0; i < savedList.playlistLink.length; i++) {
                for (var j = 0; j < savedList.playlistLink.length; j++) {
                    if (data.playlists.items[1].external_urls.spotify === savedList.playlistLink[i]) {
                        savedList.playlistLink.splice(i , 1);
                        savedList.playlistName.splice(i , 1);
                    }
                }
            }
            savedList.playlistName.push(data.playlists.items[1].name);
            savedList.playlistLink.push(data.playlists.items[1].external_urls.spotify);
            localStorage.setItem('savedplaylistName', JSON.stringify(savedList.playlistName));
            localStorage.setItem('savedplaylistLink', JSON.stringify(savedList.playlistLink));
            updateSavedPlaylist()
        });
        $('#save-playlist3').on('click', function() {
            event.preventDefault();
            event.stopPropagation();
            for (var i = 0; i < savedList.playlistLink.length; i++) {
                for (var j = 0; j < savedList.playlistLink.length; j++) {
                    if (data.playlists.items[2].external_urls.spotify === savedList.playlistLink[i]) {
                        savedList.playlistLink.splice(i , 1);
                        savedList.playlistName.splice(i , 1);
                    }
                }
            }
            savedList.playlistName.push(data.playlists.items[2].name);
            savedList.playlistLink.push(data.playlists.items[2].external_urls.spotify);
            localStorage.setItem('savedplaylistName', JSON.stringify(savedList.playlistName));
            localStorage.setItem('savedplaylistLink', JSON.stringify(savedList.playlistLink));
            updateSavedPlaylist()
        });

        return data.playlists.items;
    }

    fetch(weatherSearchURL) 
    .then(function(res) {
        if(res.status != '200') {
            $('#weather-search').attr('placeholder', 'City not found, try again?');
        }else{
            $('#weather-search').attr('placeholder', 'Search again?');
            $('#weather-search').val('');
            return res.json();
        }
    })
    .then(function(data) {
        if(data.weather[0].main === "Thunderstorm"){
            currentWeather = thunderstorm;
        }
        if(data.weather[0].main === "Drizzle"){
            currentWeather = drizzle;
        }
        if(data.weather[0].main === "Rain"){
            currentWeather = rain;
        }
        if(data.weather[0].main === "Snow"){
            currentWeather = snow;
        }
        if(data.weather[0].main === "Clear"){
            currentWeather = clear;
        }
        if(data.weather[0].main === "Clouds"){
            currentWeather = clouds;
        }
        if(data.weather[0].main === "Mist"){
            currentWeather = mist;
        }
        if(data.weather[0].main === "Smoke"){
            currentWeather = smoke;
        }
        if(data.weather[0].main === "Haze"){
            currentWeather = haze;
        }
        if(data.weather[0].main === "Dust"){
            currentWeather = dust;
        }
        if(data.weather[0].main === "Fog"){
            currentWeather = fog;
        }
        if(data.weather[0].main === "Sand"){
            currentWeather = sand;
        }
        if(data.weather[0].main === "Ash"){
            currentWeather = ash;
        }
        if(data.weather[0].main === "Squall"){
            currentWeather = squall;
        }
        if(data.weather[0].main === "Tornado"){
            currentWeather = tornado;
        }
        var i = Math.floor(Math.random() * currentWeather.id.length);
        genreId = currentWeather.id[i];
        genreName = currentWeather.name[i];

        $('#forecastDesc').text(data.weather[0].main + ' in ' + city + ' today. In the mood for a ' + genreName + ' playlist?');
    })
    .then(function() {
        _getPlaylistByGenre(token, genreId)
    })
});
    
// This generates an access token for us on load
const APIController = (function() {
    
    const clientId = 'c7c18fd700dd48969f6bd66edf018bfc';
    const clientSecret = 'ca22b75977b643ad8edc5606351acbf1';

    const _getToken = async () => {
        const result = await fetch('https://accounts.spotify.com/api/token', {

            method: 'POST',

            headers: {

                'Content-Type' : 'application/x-www-form-urlencoded', 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)

            },

            body: 'grant_type=client_credentials'

        });

        const data = await result.json();
        token = data.access_token;
        return data.access_token;

    }
    _getToken()
})();