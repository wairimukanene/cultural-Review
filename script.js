$(document).ready(function() {
  $("p").click(function() {
    $(".walrus-showing").toggle();
    $(".walrus-hidden").toggle();
  });
});

$("#work1").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#githeri").slideToggle();

}, function () {
  $(this) .stop().animate({
    opacity: .4
  },250);
  $("#githeri").fadeOut();
});
$("#work2").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#samaki").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("samaki").fadeOut();
});
$("#work3").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#biri").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("biri").fadeOut();
});
$("#work4").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#mukimo").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("mukimo").fadeOut();
});
$("#maasai").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#paragraph").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("").fadeOut();
});
$("#luo").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#paragraph1").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("").fadeOut();
});
$("#kikuyu").hover(function () {
  $(this).stop().animate({
      opacity: .4
  }, 250);
  $("#paragraph2").slideToggle();

}, function () {
  $(this).stop().animate({
      opacity: 1
  }, 550)
  $("").fadeOut();
});

