$(document).ready(function() {
  
  const renderTweets = function(tweets) {
    let $container = $('#tweets-container');
    for (const item of tweets) {
      $container.append(createTweetElement(item));
    }
  }  

  const createTweetElement = function ({ user: { avatars, name, handle }, content, created_at }) {

    let $tweet = $("<article>").addClass("tweet");

    const avatar = $(`<img src=${avatars}>`);
    const username = $(`<p>`).text(name);
    const div = $(`<div>`).addClass("left2").append(avatar, username);
    const userHandle = $(`<p>`).text(handle).addClass("right handle");
    const header = $(`<header>`).addClass("grid").append(div, userHandle);

    const userContent = $(`<p>`).text(content.text).addClass("tweetText");
    const pageBreak = $(`<hr>`);

    const createdAt = $(`<p>`).text(createDate(created_at)).addClass("left time");
    const flag = $(`<i>`).addClass("fas fa-flag");
    const arrow = $(`<i>`).addClass("fas fa-retweet");
    const heart = $(`<i>`).addClass("fas fa-heart");
    const div2 = $(`<div>`).addClass("right2").append(flag, arrow, heart);
    const footer = $(`<footer>`).addClass("grid").append(createdAt, div2);

    return $tweet.append(header, userContent, pageBreak, footer);
  }

  const createDate = function(time) {
    return `${Math.round((Date.now() - new Date(time)) / (1000 * 60 * 60 * 24))} Days Ago`;
  };

//POST REQUEST

const $form = $('#tweetForm');

$form.on('submit', (event) => {
  event.preventDefault();
  
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: $form.serialize()
  })
  .then(renderTweets)
  .fail(err => {
    alert('Failed to submit tweet data');
  });

  
})

const loadTweets = function() {
  $('.tweets-container');
  $.ajax('/tweets', { method: 'GET' })
    .then(tweets => {
      console.log("tweets");
      $('.tweets-container').empty();
      renderTweets(tweets);
    })
    .fail(err => {
      console.log('DID NOT WORK', err);
      alert('Something went wrong :( ...' + err.statusText);
    });

}

//refetch the data on page load
loadTweets();


});






