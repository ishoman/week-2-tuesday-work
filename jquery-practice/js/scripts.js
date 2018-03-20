$(document).ready(function(){
  $(".clickable").click(function(){
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".fadeout").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $("button#green").click(function(){
    $("body").removeClass();
    $("body").addClass("green-background")
  });

  $("button#yellow").click(function() {
    $("body").removeClass();
    $("body").addClass("yellow-background")
  });

  $("button#red").click(function() {
    $("body").removeClass();
    $("body").addClass("red-background")
  });
});
