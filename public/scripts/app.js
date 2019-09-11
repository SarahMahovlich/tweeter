$(document).ready(function() {
  
const renderTweets = function(tweets) {

  for (const item of data) {
    $('#tweets-container').append(createTweetElement(item));
  }
}  

const createTweetElement = function (tweet) {

  let $tweet = $("<article>").addClass("tweet");
  
  let tweetInfo = `
    <header class="grid">
      <div class="left2">
        <img src=${tweet.user.avatars} title="granny">
        <p>${tweet.user.name}</p>
      </div>
      <p class="right" class="handle">${tweet.user.handle}</p>
    </header>
    <p class="tweetText">${tweet.content.text}</p>
    <hr>
    <footer class="grid">
      <p class="left" class="time">${tweet.created_at}</p>
        <div class="right2">
          <img src="https://icon-library.net/images/waving-flag-icon/waving-flag-icon-16.jpg" title="flag">
          <img src=https://cdn1.iconfinder.com/data/icons/toolbar-signs/512/refresh-512.png title="arrows">
          <img src="https://cdn.imgbin.com/6/20/14/imgbin-blue-heart-color-r-vC9dTTXfp3JhuZma50LveUZyH.jpg" title="heart">
        </div>
    </footer>
  `;

  $tweet.append(tweetInfo);
  return $tweet;
}

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
];

renderTweets(data);

});






