# Liri-Node-App
Homework Assignment 8

This application uses Node.js to create Liri bot (similar to iPhone's Siri). Liri is a command line application that takes in arguments and returns data based on one of four commands:

```
my-tweets
spotify-this-song
movie-this
do-what-it-says
```

### What Each Command Does:

#### my-tweets
Retrieves up to your latest 20 tweets:
Will also take an alternative twitter handle as a fourth argument to show someone else's tweets.
```
node liri.js my-tweets
```

#### spotify-this-song
Retrieves song information for a track:
If no argument is passed, song defaults to "The Sign" by Ace of Base.
```
node liri.js spotify-this-song <song name>
```

#### movie-this
Retrieves movie information for a movie:
If no argument is passed, movie defaults to "Mr. Nobody".
```
node liri.js movie-this <movie name>
```

#### do-what-it-says
Takes info from random.txt (a song) and performs spotify-this-song:
```
node liri.js do-what-it-says
```


