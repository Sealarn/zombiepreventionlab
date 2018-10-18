$(document).ready(function () {
  $("#tech").click(function () {
    $('html, body').animate({
      scrollTop: $("#technologies").offset().top
    }, 600);
  });

  $("#ab").click(function () {
    $('html, body').animate({
      scrollTop: $("#about").offset().top
    }, 600);
  });

  $("#ph").click(function () {
    $('html, body').animate({
      scrollTop: $("#photos").offset().top
    }, 600);
  });

  $("#proj").click(function () {
    $('html, body').animate({
      scrollTop: $("#project").offset().top
    }, 600);
  });

  $("#getHome").click(function () {
    $('html, body').animate({
      scrollTop: 0}, 600);
  });

  $(".row-footer").click(function () {
    $('html, body').animate({
      scrollTop: 0}, 600);
  });
});