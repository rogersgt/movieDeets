module.exports = {
  mov: [
    "<div id='<%= _id %>'>",
           "<center><h2><%= title %></h2><h4><%= year %></h4></center>",
           "<img src='<%= picture %>' />",
           "<button class='delete'>Delete</button>",
        "</div>"
  ].join(""),
  header: [
    "<ul>",
      "<li><a href='' class='home'>Home</a></li>",
      "<li><a href='' class='filter'>Filter</a></li>",
      "<li><a href='' class='login'>Login</a></li>",
      "<li><button class='reset'>Reset</button></li>",
    "</ul>"
  ].join(""),
  form: [
    "<ul class='submitForm'>",
      "<li><input type='text' id='movTitle' placeholder='Enter movie title'></li>",
      "<li><input type='text' id='movYear' placeholder='Enter movie year'></li>",
      "<li><input type='text' id='movBanner' placeholder='Enter movie banner url'></li>",
      "<li><button type='button' class='addMov'>Add Movie</button></li>",
    "</ul>",
    "<section id='banner'>",
      "<h1>Movie Deets</h1>",
      "<hr>",
    "</section>"
  ].join("")
}
