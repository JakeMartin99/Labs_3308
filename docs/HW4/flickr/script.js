key = "5c42274b62037ac6ea147b3bd3b684cf";
secret = "5960866ce8d5618c";
page = 1;
size = "w"

function search(){
  form = document.forms[0];
  num = form.numimgs.value;
  tags = form.searchfield.value.replace(",", "%2C+").replace(" ", "");
  page = 1;
  $("#photos").html('');
  if (num != "0"){
    makeApiCall();
  }
}

$(window).on('scroll', function() {
  var height = $(document).height();
  var pos = $(window).height() + $(window).scrollTop();
  if (pos >= height){
    makeApiCall();
  }
});

function makeApiCall() {
  var url ='https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=' + key
  url += '&tags=' + tags //tag1%2C+tag2%2C+tag3
  url += '&privacy_filter=1&safe_search=1&per_page=' + num;
  url += 'page=' + page;
  url += '&format=json&nojsoncallback=1';
  $.ajax({url:url, dataType:"json"}).then(function(data) {
    console.log(page, url, data)
    photolist = data.photos.photo;
    ins = ''
    for(var i=0; i<photolist.length; i++){
      photo = photolist[i];
      source = "https://live.staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + "_" + size + ".jpg";
      ins += '<div class="card m-5 rounded" style="min-width:15%; border: 5px solid teal;">';
      ins += '<img class="img-card-top img-fluid" style="object-fit:cover;height:80%;" src="' + source + '">';
      ins += '<div class="card-body">';
      ins += '<h5 class="card-title font-weight-bold">' + photo.title + '</h5>';
      ins += '</div></div>';
    }
    $("#photos").append(ins);
  })
  page += 1;
}
