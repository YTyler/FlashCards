$(document).ready(function() {
  // EXAMPLES - START
  // $(".clickable").click(function() {
  //
  //   $("#walrus-showing").slideToggle();
  //   $("#walrus-hidden").slideToggle();
  //
  //   $("#right").removeClass("noBackground");
  //   $("#right").addClass("green-background");
  //
  //   $(this).toggleClass("highlight")
  // });
  // EXAMPLES - END

  $('.card').click(function(){
    $(this).children().children('.textA').slideToggle();
    $(this).children().children('.textB').slideToggle();
    $(this).children().toggleClass("flipped");
  });

  $('.memorized').click(function(){
    $(this).parent().parent().fadeToggle();
  });
});
