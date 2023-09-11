
$('#banner-part').slick({
  dots: true,
  autoplay:true,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
 
});


$('.slide').slick({
  dots: true,
  autoplay: true,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'<i class= "fa fa-angle-left prev"></i>',
  nextArrow:'<i class= "fa fa-angle-right next"></i>',
 
});


 $('.venobox').venobox();
				
 $('.top-slider').slick({
  dots: false,

  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.bottom-slider',
});				 



 // .bottom-slider

 $('.bottom-slider').slick({
  dots: false,
  arrows:false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
 centerMode:true,
 centerPadding: 0,
 asNavFor: '.top-slider',
});


var names = ['anisul','korim','korg'];
names.splice(1,2);
console.log(names);
