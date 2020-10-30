function header(opt){
  str = '';
  str += '<ul class="navbar-nav mr-auto">';
    str += '<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="home" ? "active" : "") + '" href="../views/mypage_bootstrap.html">Home</a>';
    str += '</li>';
    str +='<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="project" ? "active" : "") + '" href="../views/projects.html">Projects</a>';
    str += '</li>';
    str += '<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="old" ? "active" : "") + '" href="../views/mypage.html">Old Homepage</a>';
    str += '</li>';
    str += '<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="signup" ? "active" : "") + '" href="../signup-modal/login.html">Sign Up Modal</a>';
    str += '</li>';
    str += '<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="tictactoe" ? "active" : "") + '" href="../tic-tac-toe/tic-tac-toe.html">Tic Tac Toe game</a>';
    str += '</li>';
    str += '<li class="nav-item">';
      str += '<a class="nav-link ' + (opt=="flickr" ? "active" : "") + '" href="../flickr/index.html">Flickr API Gallery</a>';
    str += '</li>';
  str += '</ul>';
  str += '<a href="https://github.com/JakeMartin99"><img src="../resources/img/github.png" height=50px style="margin-left:0px"></a>';
  $('#navbar').html(str);
  $("html").append('<footer style="text-align:center; bottom:0; width:100%;"><br><div class="container-fluid bg-secondary p-3"><a href="https://www.linkedin.com/in/jakemartin99/"><img class="rounded" src="../resources/img/linkedin.png" height="50px"></a></div></footer>');
}
