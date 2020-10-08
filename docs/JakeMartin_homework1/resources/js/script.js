var tweet_count = [0, 0, 0];

function addTweet(num){
  tweet_count[num] += 1;
  var element = document.getElementById("interest" + num);
  element.innerHTML +=
    '<div id="t' + num + '-' + tweet_count[num] + '" class="card rounded mt-3 border border-dark">' +
      '<div class="card-body mt-0 p-3">' +
        '<div class="text-right p-0">' +
          '<p class="rounded-circle btn btn-danger font-weight-bold text-center" style="width: 35px; height=20px;" onClick="remTweet(' + num + ')">-</p>' +
        '</div>' +
        '<img class="card-img rounded-circle" style="width: 50%" src="../resources/img/twitter.png" alt="Twitter Logo">' +
        '<div class="text-right p-0">' +
          '<h5 class="font-weight-bold">Tweet</h5>' +
          '<p>The text of the tweet would be here. #Coding #VeryCool</p>' +
        '</div>' +
      '</div>' +
    '</div>';
}

function remTweet(num){
  document.getElementById("t" + num + "-" + tweet_count[num]).remove();
  tweet_count[num] -= 1;
}
