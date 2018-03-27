# Liri-Node-App
Homework Assignment 8

This application uses Node.js to create Liri bot (similar to iPhone's Siri). Liri is a command line application that takes in arguments and returns data based on one of four commands:

my-tweets
spotify-this-song
movie-this
do-what-it-says

What Each Command Does:

node liri.js my-tweets
Displays my last 20 tweets and when they were created in terminal/bash window. I actually don't have 20 tweets on my personal account 
so this argument will notify the user that if they pass a 4th argument equal to any twitter handle, it will show that handle's 20 most 
recent tweets. 

node liri.js spotify-this-song <song name>
Shows the following information about the song in terminal/bash window:
Artist
The song's name
A preview link of the song from Spotify
The album that the song is from
If you do not pass a song as a fourth argument, it will default to "The Sign" by Ace of Base.

node liri.js movie-this <movie name>
Shows the following information in terminal/bash:
Title of the movie.
Year the movie came out.
IMDB Rating of the movie.
Country where the movie was produced.
Language of the movie.
Plot of the movie.
Actors in the movie.
Rotten Tomatoes Rating.
Rotten Tomatoes URL.
If no movie is passed as a fourth argument, it will default to "Mr. Nobody"

node liri.js do-what-it-says
Takes the text from random.txt and runs the content (song information) through the spotify-this-song command.


