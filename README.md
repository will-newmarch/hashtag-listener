# hashtag-listener
A Twitter hashtag listener that runs on NodeJS. 

This script allows a developer to run a shell script when a tweet with a particular hashtag appears in Twitter.

---

## Setup 

Run `npm install`

### Create a Twitter application
1. Visit the Twitter Developers Site.
2. Sign in with your Twitter Account.
3. Go to "My Applications".
4. Create a New Application.
5. Fill in your Application Details.
6. Create Your Access Token.
7. Fill in the setup parameters (the relative keys and secrets) in the `index.js` script.

### Set hashtag and shell script
1. Set the desired hashtag variable in the top of `index.js`.
2. Add your shell command to the shellscript variable in the top of `index.js`.

### Run
Run using `node index.js`.
