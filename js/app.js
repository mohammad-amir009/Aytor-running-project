
$(function(){

//* banner slider
$('#banner').slick({
    arrows:false,
    dots:true,
    autoplay:true,
    
  });

  $('.productSlider').slick({
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay:true,
    prevArrow: '#newProduct .arrows .leftArrow',
    nextArrow: '#newProduct .arrows .rightArrow',
  });

  $('#bestSeller .productSlider').slick({
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay:true,
    prevArrow: '#newProduct .arrows .leftArrow',
    nextArrow: '#newProduct .arrows .rightArrow',
  }); 

  // $('#deals .discountSlider').slick({
  //   arrows:true,
  //   slidesToShow: 2,
  //   slidesToScroll: 2,
  //   autoplay:true,
  //   // prevArrow: '#newProduct .arrows .leftArrow',
  //   // nextArrow: '#newProduct .arrows .rightArrow',
  // }); 

});