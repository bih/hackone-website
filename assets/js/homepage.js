$(document).ready(function(){
  $("section#headline").find('h1, h2, code').hide();
  $("section#headline").find('h1').delay(300).fadeIn(400, function(){
    $("section#headline").find('h2').delay(0).fadeIn(400, function(){
      $("section#headline").find('code').delay(300).fadeIn(400);
      $("section#headline").find('p').delay(300).fadeIn(400);
    });
  });

  document.addEventListener("hackone:get", function(e){
    var user = e.detail.json;
    var name = (user.bio.firstName.length > 0 && user.bio.lastName.length > 0) ? user.bio.firstName + " " + user.bio.lastName : user.username;

    $("#result span.string:eq(0)").text("\"" + name + "\"");
    $("#result span.string:eq(1)").text("\"" + user.shirtSize + "\"");
    $("#result span.string:eq(2)").text("\"" + user.bio.websites.github + "\"");
  });
});