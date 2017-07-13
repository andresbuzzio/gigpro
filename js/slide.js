// slider center

// $(document).ready(function(){
//  $('.owl-carousel').owlCarousel()
// });

$(document).ready(function(){

$('.quote-text-container, .caption-container').slick({
slidesToShow: 1,
slidesToScroll: 1,
arrows: false,
fade: true,
asNavFor: '.slider'
});

$('.slider').slick( {
slidesToShow: 3,
centerMode: true,
centerPadding: '60px',
// prevArrow: '.prev1',
nextArrow: '.next1',
asNavFor: '.quote-text-container, .caption-container',
});
