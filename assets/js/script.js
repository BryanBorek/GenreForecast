var rootEl = $('#root');
var searchInputEl = $('#weather-search');
var searchButtonEl = $('#search-button');
var resultsListEl = $('#results-list');
var resultsItemEl = $('#results-item');

var thunderstorm = ['this is where we put genres for thunder']; //To-Do: add genres to this array
var drizzle	 = ['this is where we put genres for drizzle']; //To-Do: add genres to this array
var rain = ['this is where we put genres for rain']; //To-Do: add genres to this array
var snow = ['this is where we put genres for snow']; //To-Do: add genres to this array
var clear = ['this is where we put genres for clear']; //To-Do: add genres to this array
var clouds = ['this is where we put genres for clouds', 'other genre', 'and another', 'one more', 'and anotha one!']; //To-Do: add genres to this array
var mist = ['this is where we put genres for mist']; //To-Do: add genres to this array
var smoke = ['this is where we put genres for smoke']; //To-Do: add genres to this array
var haze = ['this is where we put genres for haze']; //To-Do: add genres to this array
var dust = ['this is where we put genres for dust']; //To-Do: add genres to this array
var fog = ['this is where we put genres for fog']; //To-Do: add genres to this array
var sand = ['this is where we put genres for sand']; //To-Do: add genres to this array
var ash = ['this is where we put genres for ash']; //To-Do: add genres to this array
var squall = ['this is where we put genres for squall']; //To-Do: add genres to this array
var tornado = ['this is where we put genres for tornado']; //To-Do: add genres to this array

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
    var genre;

    const _getPlaylistByGenre = async (token, genre) => {
        // On the line below, change 'alternative' to the variable genre when done with testing
        const result = await fetch('https://api.spotify.com/v1/browse/categories/' + 'alternative' + '/playlists?limit=5', {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        console.log(data.playlists.items);
        $('#linkOne').text('Check out this playlist: ' + data.playlists.items[0].name)
        $('#linkOne').attr('href' , data.playlists.items[0].external_urls.spotify)
        return data.playlists.items;
    }

    fetch(weatherSearchURL) 
    .then(function(res) {
        return res.json()
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
        console.log(currentWeather);
        //TO-DO create a random number between 0 and 4 for i used on the next line
        var i = Math.floor(Math.random() * currentWeather.length);
        console.log(i);
        genre = currentWeather[i];
    })
    .then(function() {
        console.log('search initiated')
        console.log(genre)
        _getPlaylistByGenre(token, genre)
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
