// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on table-data, waitinglist, etc.
// ===============================================================================

const friends = require("../data/friends");



// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = app => {
  // API GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases when a user visits a link
  // (ex: localhost:PORT/api/admin... they are shown a JSON of the data in the table)
  // ---------------------------------------------------------------------------

  app.get("/api/friends", ((req, res) => {
    res.json(friends);
  }));



  // API POST Requests
  // Below code handles when a user submits a form and thus submits data to the server.
  // In each of the below cases, when a user submits form data (a JSON object)
  // ...the JSON is pushed to the appropriate JavaScript array
  // (ex. User fills out a reservation request... this data is then sent to the server...
  // Then the server saves the data to the tableData array)
  // ---------------------------------------------------------------------------

  app.post("/api/friends", ((req, res) => {
    var friendMatch = {
      name: "",
      photo: "",
      absoluteDifference: Infinity
      //infinity will return any type of number 

    };
    var userData = req.body;
    var userScores = userData.scores;
    // global variables for us to be able to access at a later time (scope!)
    console.log(userData);
    console.log(userScores);
    console.log(friendMatch);

    var i;
    for (i = 0; i < friends.length; i++) {
      // will end up being a loop within a loop
        // outer loop  loops the entire friends.js

      var currentFriend = friends[i];
      var differenceScore = 0;

      console.log(currentFriend);
      console.log(differenceScore);
        // inner loop loops through and compare the scores
        var j;
          for (j = 0; j < currentFriend.scores.length; j++) {
            var currentFriendScore = currentFriend.scores[j];
            var currentUserScore = userScores[j];

            console.log(currentFriendScore);
            console.log(currentUserScore);

            differenceScore += Math.abs( parseInt(currentFriendScore) -  parseInt(currentUserScore));
          // perfect example of asynchronous coding; looping through an array while looping through another array defined by global variables outside of each
            console.log(differenceScore);

      

    
    }


  }
})











// receive the value of the survey called userData; 
      // going to need a few global variables - 
          // 1. to hold on to friend that surveyor matches (var = friendMatch = friendmatchname + friendmatchphoto + the absolute value score)




// have to compare userData scores to friendScores out of friends.js
// have to calculate the absolute difference between the scores
// then push user data to the friends.js
// then return the best match to appear in the modal on the survey.html


