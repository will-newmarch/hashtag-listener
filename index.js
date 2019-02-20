var sys = require('sys')
var exec = require('child_process').exec;
var TwitterPackage = require('twitter');

// Hashtag to listen out for.
var hashtag = '#catgifs';

// Script to run on observing an instance of the hashtag.
var shellscript = "ls -la";

// Setup Parameters
var secret = {
  consumer_key: 'CONSUMER_KEY',
  consumer_secret: 'CONSUMER_SECRET',
  access_token_key: 'ACCESS_TOKEN_KEY',
  access_token_secret: 'ACCESS_TOKEN_SECRET'
}

/*
 * Main Script
 */

var Twitter = new TwitterPackage(secret);

console.log('Listening to:' + hashtag);

Twitter.stream('statuses/filter', {track: hashtag}, function(stream) {

    stream.on('data', function(tweet) {

        // Run shell script
        exec(shellscript, function(err, stdout, stderr) {
            console.log(stdout);
        });

        // Output tweet to terminal
        console.log('Tweet:@' + tweet.user.screen_name + 
        '\t' + tweet.text);
        console.log('------') 

    });

    stream.on('error', function(error) {
        console.log(error);
    });

});