$(function () {
  $("span.clickable").click(function() {
    $(".clickable").removeClass("paragraph-highlight");
    $(this).toggleClass("paragraph-highlight");
  });
});
