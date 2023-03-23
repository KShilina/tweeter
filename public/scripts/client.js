//The DOM is ready to be manipulated
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
            <span>${timeago.format(tweetObj.created_at)}</span>
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

  // new tweet event listener
  $("#tweet-form").submit(function (event) {
    console.log("here");
    // Stop form from submitting normally
    event.preventDefault();

    // Serialize the form data into a query string
    let formData = $(this).serialize();

    // submit POST request to server
    $.ajax({
      url: "/tweets",
      method: "POST",
      //serialized data sent to server
      data: formData,
    });
  });

  /*
   * Makes a GET request to retrieve tweet history
   * Returns array of tweets
   */
  const loadTweets = function () {
    $.ajax("/tweets", { method: "GET" }).then(function (tweets) {
      renderTweets(tweets);
    });
  };
  loadTweets();
});
