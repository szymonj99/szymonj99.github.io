//JavaScript responsible for the Slick Slide element on the index page.
$(document).ready(function() {
  $('.slick-display-index').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });
});