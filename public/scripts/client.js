/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

// Fake data taken from initial-tweets.json
$(document).ready(() => {
  const tweetData = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];
  //This function responsible for taking in an array of tweet objects and then appending each one to the #tweets-container
  const renderTweets = function (tweets) {
    console.log(tweets);
    // loops through tweets
    for (let tweet of tweets) {
      // calls createTweetElement for each tweet
      let $tweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $("#tweets-container").append($tweet);
    }
  };

  const createTweetElement = function (tweetObj) {
    console.log(tweetObj);
    //create tweet element
    let article = `<article class="tweet">
   <header>
          <div>
            <img class="tweet-img" src="${tweetObj.user.avatars}"/>
            <span>${tweetObj.user.name}</span>
          </div>
          <span class="user-name"> "${tweetObj.user.handle}" </span>
        </header>
        <p>
          "${tweetObj.content.text}"
        </p>

        <footer class="tweet-date">
            <span>${tweetObj.created_at}</span>
            <span class="icon">
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-repeat"></i>
              <i class="fa-solid fa-heart"></i>
            </span>
        </footer>
      </article>`;

    return article;
  };

  renderTweets(tweetData);
});
