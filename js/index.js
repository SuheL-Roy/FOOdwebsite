/*
$(document).ready(function(){
    $('.food-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
      
         
      });
              
  
});
*/

$(document).ready(function () {

  $('.food-slider').slick({
    
    slidesToScroll: 1,
    infinite: true,
    speed: 2000,
    prevArrow:".prev-btn",
    nextArrow:".next-btn",
    
    
      
    
  });


});