var rootEl = $('#root');
var searchInputEl = $('#weather-search');
var searchButtonEl = $('#search-button');
var resultsListEl = $('#results-list');
var resultsItemEl = $('#results-item');
var cardContainerEl = $('#cards')
cardContainerEl.hide();

// var for searches needs to be object
var thunderstorm = {
    name: ['Alternative', 'Hip-Hop', 'Rock', 'Punk', 'Soul'],
    id: ['alternative', 'hiphop', 'rock', 'punk', '0JQ5DAqbMKFIpEuaCnimBj']
};

//var thunderstorm = ['celtic metal', 'dub step', 'symphonic deathcore', 'slovak metal', 'christian power metal']; 
var drizzle  = ['uk post-hardcore', 'southern hip hop', 'crunk', 'new wave', 'britpop']; 
var rain = ['tropical house', 'trap argentino', 'lullaby', 'hawaiian hip hop', 'liquid funk'];
var snow = ['electric dub', 'psybass', 'brega', 'garage psych', 'indie rock']; 
var clear = ['punk tuga', 'futuristic swag', 'classical jazz fusion', 'bluegrass', 'chinderlieder'];
var clouds = ['alternative', 'hiphop', 'rock', 'pop', 'soul']; 
var mist = ['shanty', 'irish pub song', 'r&b', 'disco', 'belly dance']; 
var smoke = ['swiss punk', 'russian witch house', 'pop punk', 'trap metal italiana', 'scream rap'];
var haze = ['shred', 'dreamo', 'c8', 'jangle pop', '8d']; 
var dust = ['spa', 'zen', 'brain waves', 'white noise', 'bow pop']; 
var fog = ['this is where we put genres for fog']; //To-Do: add genres to this array
var sand = ['desert', 'dust']; //To-Do: add genres to this array
var ash = ['fire', 'pokemon', 'blaze']; //To-Do: add genres to this array
var squall = ['this is where we put genres for squall']; //To-Do: add genres to this array
var tornado = ['progressive deathcore', 'skansk musik', 'swedish blues', 'finnish melodeath', 'psychobilly'];


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


    const _getPlaylistByGenre = async (token, genre) => {
        // On the line below, change 'alternative' to the variable genre when done with testing
        const result = await fetch('https://api.spotify.com/v1/browse/categories/' + genreId + '/playlists?limit=5', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(data);
        $('#card1').text(data.playlists.items[0].name)
        $('#image1').attr('src', data.playlists.items[0].images[0].url)
        $('#desc1').text(data.playlists.items[0].description)
        
        $('#card2').text(data.playlists.items[1].name)
        $('#image2').attr('src', data.playlists.items[1].images[0].url)
        $('#desc2').text(data.playlists.items[1].description)
        
        $('#card3').text(data.playlists.items[2].name)
        $('#image3').attr('src', data.playlists.items[2].images[0].url)
        $('#desc3').text(data.playlists.items[2].description)

        //$('#linkOne').attr('href' , data.playlists.items[0].external_urls.spotify)

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
        return data.playlists.items;
    }

    fetch(weatherSearchURL) 
    .then(function(res) {
        return res.json()
    })
    .then(function(data) {
        console.log(data)
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
            currentWeather = thunderstorm;
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
        console.log(currentWeather);
        //TO-DO create a random number between 0 and 4 for i used on the next line
        var i = Math.floor(Math.random() * currentWeather.id.length);
        console.log(i);
        genreId = currentWeather.id[i];
        genreName = currentWeather.name[i];

        $('#forecastDesc').text(data.weather[0].main + ' in ' + city + ' today. In the mood for a ' + genreName + ' playlists.');
    })
    .then(function() {
        console.log('search initiated')
        console.log(genreId)
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
        console.log(token);
        return data.access_token;

    }
    _getToken()
})();

