require("dotenv").config();

//node module imports needed for functions
var request = require("request");
var Twitter = require('twitter');
var spotify = require('spotify');
var keys = require("./keys.js");
var fs = require("fs");
// var used for terminal command if/elses
var liriArg = process.argv[2];

//terminal commands
if (liriArg === "my-tweets") {
    tweets();
} else if (liriArg === "spotify-this-song") {
    song();
} else if (liriArg === "movie-this") {
    movie();
} else if (liriArg === "do-what-it-says") {

} else {
    console.log("Please enter one of the following commands: my-tweets, spotify-this-song, movie-this, do-what-it-says.");
}

//function to show movie data
function movie() {

    var args = process.argv;
    var movieName = "";

    for (i = 3; i < args.length; i++) {
        if (i > 3 && i < args.length) {
            movieName = movieName + "+" + args[i];
        } else {
            movieName = args[i];
        }
    };

    if (movieName === "") {
        movieName = "Mr." + "+" + "Nobody"
    };

    //run a request to the OMDB API with the specified movie
    var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            console.log("-------------------------------------------------------------------------------------------");
            console.log("Title: " + JSON.parse(body).Title);
            console.log("Year: " + JSON.parse(body).Year);
            console.log("IMDB rating: " + JSON.parse(body).imdbRating);
            console.log("Rotten Tomatoes rating: " + JSON.parse(body).Ratings[1].Value);
            console.log("Country: " + JSON.parse(body).Country);
            console.log("Language: " + JSON.parse(body).Language);
            console.log("Plot: " + JSON.parse(body).Plot);
            console.log("Actors: " + JSON.parse(body).Actors);
            console.log("-------------------------------------------------------------------------------------------");
        } else {
            console.log("ya' messed up");
        }
    });
};

//function to show 20 most recent tweets
function tweets() {

    var client = new Twitter(keys.twitter);
    var params = {
        screen_name: "@bhferrell",
        count: 20
    };
    //used as a 4th argument to show someone else's tweets, if you so choose
    params.screen_name = process.argv[3];

    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error && response.statusCode == 200) {

            for (i = 0; i < tweets.length; i++) {
                var num = i + 1

                console.log(num + ". " + tweets[i].text + " | " + tweets[i].created_at);
            }
            //you can choose to show someone else's recent Tweets in place of mine by providing a 4th argument
            if (process.argv.length < 4) {
                console.log("***To view someone else's recent tweets, add a 4th argument after the my-tweets command, that is your desired person's twitter handle!***")
            }

        } else {
            console.log("ya' messed up");
        }
    });
}

//function to show spotify data
function song() {

    var spotify = new Spotify(keys.spotify);
    var args = process.argv;
    var songName = "";

    for (i = 3; i < args.length; i++) {
        if (i > 3 && i < args.length) {
            songName = songName + " " + args[i];
        } else {
            songName = args[i];
        }
    };

    spotify.search({
        type: 'track',
        query: songName
    }, function (err, data) {
        if (err) {
            console.log('Error occurred: ' + err);
            return;
        }

        console.log(data[0]);
    });

}