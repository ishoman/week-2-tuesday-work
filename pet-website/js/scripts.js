$(function () {
  $("button#black").click(function() {
    $("body").removeClass();
    $("body").addClass("black-background");
  });
  $("button#white").click(function() {
    $("body").addClass("white-background");
  });
});
