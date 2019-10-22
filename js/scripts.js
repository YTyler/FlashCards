$(document).ready(function() {
  $('.card').click(function(){
    $(this).children().children('.textA').slideToggle();
    $(this).children().children('.textB').slideToggle();
    $(this).children().toggleClass("flipped");
  });
    $('.memorized').click(function(){
    $(this).parent().parent().fadeToggle();
  });
});
