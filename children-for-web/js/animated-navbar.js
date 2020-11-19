//JavaScript responsible for the animated navbar.
$(document).ready(function() { //When document is finished loading
  $(".menu-icon").on("click", function() {
    $("nav ul").toggleClass("showing");
  });
});

$(window).on("scroll", function() { //Upon scrolling
  if($(window).scrollTop()) {
    $('nav').addClass('black'); //if user is scrolling
  }

  else {
    $('nav').removeClass('black'); //if user is at the top of the page
  }
});